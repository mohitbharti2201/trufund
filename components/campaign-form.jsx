const CampaignForm = () => {
  return (
    <div className="flex w-[1080px] mx-auto justify-around">
      <div className="left">
        <div class="flex">
          <div class="mx-auto w-full max-w-[550px]">
            <form>
              <div class="-mx-3 flex flex-wrap flex-col">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="fName"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Campaign Title
                    </label>
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      placeholder="Campaign Title"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary-orange focus:shadow-md"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="description"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Description
                    </label>

                    <textarea
                      className="mb-3 block text-base px-3 py-2  font-medium text-[#07074D] border-2 rounded-[0.5rem] focus:shadow-md   focus:border-primary-orange focus:outline-none"
                      id="description"
                      placeholder="Description"
                      name="description"
                      rows="4"
                      cols="50"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="date"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary-orange focus:shadow-md"
                    />
                  </div>
                </div>
                
              </div>
 
            </form>
          </div>
        </div>
      </div>
      <div className="right">
        <div class="mb-5">
          <label
            for="Required_Amount"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Required Amount
          </label>
          <input
            type="text"
            name="Required_Amount"
            id="Required_Amount"
            placeholder="Required Amount"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary-orange focus:shadow-md"
          />
        </div>

        <div className="mb-5">
        <p className="mb-6  block text-base font-medium text-[#07074D]">Upload Image</p>
        <label for="myFile"  class="w-full pr-48  rounded-md border border-[#e0e0e0]  bg-white   py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary-orange focus:shadow-md">Choose file</label>
        <input  type="file" id="myFile" name="filename"  className="hidden"/>

        </div>

        <button
    class="middle mt-4 none center mr-3 rounded-lg bg-primary-orange py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
  >Start Campaign
  </button>
      </div>
    </div>
  );
};

export default CampaignForm;
