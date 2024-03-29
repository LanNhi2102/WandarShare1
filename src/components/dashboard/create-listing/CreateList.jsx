const CreateList = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="my_profile_setting_textarea">
          <label htmlFor="propertyDescription">Description</label>
          <textarea
            className="form-control"
            id="propertyDescription"
            rows="7"
          ></textarea>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Type</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="type1">Exchange</option>
            <option data-tokens="Type2">Rent</option>
            <option data-tokens="Type3">Rent & Exchange</option>

          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">Old</option>
            <option data-tokens="Status2">Recent</option>

          </select>
        </div>
      </div>
      {/* End .col */}


      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Unit Size</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">1</option>
            <option data-tokens="Status2">2</option>
            <option data-tokens="Status3">3</option>
            <option data-tokens="Status4">4</option>
            <option data-tokens="Status5">5</option>
            <option data-tokens="Status6">Other</option>
          </select>
        </div>
      </div>
      {/* End .col */}
      <div className="row">
        <div className="col-lg-4 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="startDay">Start Day</label>
            <input
              type="date"
              className="form-control"
              id="startDay"
            />
            <p>For Exchange, please make sure the total days are less than 7</p>
          </div>
        </div>

        <div className="col-lg-4 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="endDay">End Day</label>
            <input
              type="date"
              className="form-control"
              id="endDay"
            />
            <p>For Exchange, please make sure the total days are less than 7</p>
          </div>
        </div>

        <div className="col-lg-4 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExamplePrice">Price for rent (VND)</label>
            <input
              type="number"
              className="form-control"
              id="formGroupExamplePrice"
            />
          </div>
        </div>
      </div>

      {/* End .col */}


      {/* End .col */}

      <button className="btn admore_btn mb30">Add More Days And Price</button>


    </>
  );
};

export default CreateList;
