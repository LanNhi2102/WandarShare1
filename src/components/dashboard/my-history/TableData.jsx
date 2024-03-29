import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import properties from "../../../data/properties";
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../my-cancel/PropertiesContext';
const TableData = () => {
  const { setSelectedProperty } = useProperties();
  const [show, setShow] = useState(false);
  const [currentProperty, setCurrentProperty] = useState(null); // Thêm state này
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = (property) => {
    setCurrentProperty(property); // Lưu trữ property tạm thời
    setShow(true);
  };
  const handleConfirm = () => {
    if (currentProperty) {
      setSelectedProperty(currentProperty); // Set selectedProperty trước khi điều hướng
      navigate('/my-cancel');
    }
  };
  let theadConent = [
    "Listing Title",
    "Start Day",
    "End Day",
    "Type",
    "Status",

  ];

  let tbodyContent = properties?.slice(0, 4)?.map((item) => (
    <tr key={item.id}>
      <td scope="row">
        <div className="feat_property list favorite_page style2">
          <div className="thumb">
            <img

              className="img-whp cover"
              src={item.img}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">For Rent</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <h4>{item.title}</h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.location}
              </p>
              <a className="fp_price text-thm" href="#">
                {item.price} VND
                <small>/week</small>
              </a>
            </div>
          </div>
        </div>
      </td>
      {/* End td */}

      <td>5 March, 2024</td>
      <td>12 March, 2024</td>
      {/* End td */}
      <td>Rent </td>

      <td>
        {/* Kiểm tra trạng thái và hiển thị tương ứng, thêm nút Cancel nếu Pending */}
        {item.status === "Finished" ? (
          <span className="status_tag badge">Finished</span>
        ) : (
          <>
            <span className="status_tag badge">Pending</span>
            {/* Thêm nút Cancel */}
            <button
              type="button"
              className="btn btn-danger btn-sm"
              style={{
                padding: '0.25rem 0.5rem',
                fontSize: '0.875rem',
                lineHeight: 1.5,
                verticalAlign: 'middle',
                marginLeft: '5px',
              }}

              onClick={handleShow}>
              Cancel
            </button>

            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cancel Confirmation</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to cancel?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  No
                </Button>
                <Button variant="primary" onClick={handleConfirm}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </td>
      {/* End td */}
    </tr>
  ));

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            {theadConent.map((value, i) => (
              <th scope="col" key={i}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        {/* End theaad */}

        <tbody>{tbodyContent}</tbody>
      </table>
    </>
  );
};

export default TableData;
