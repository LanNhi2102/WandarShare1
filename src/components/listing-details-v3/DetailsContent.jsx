import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";


const DetailsContent = () => {
  return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list">
        </div>
        {/* End .lsd_list */}

        <h4 className="mb30">YourInfomation</h4>
        <PropertyDescriptions />
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Payment</h4>
          </div>
          <PropertyDetails />
        </div>
      </div>
      {/* End .additional_details */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Discount</h4>
          </div>
          <AdditionalDetails />
        </div>
      </div>
      {/* End .additional_details */}
    </>
  );
};

export default DetailsContent;
