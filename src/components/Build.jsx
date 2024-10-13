import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyFiles = () => {
  const handleOpenNewTab = () => {
    window.open("/build/mintcoin", "_blank", "noopener,noreferrer");
  };
  return (
    <div className="container px-4 mx-auto">
      <div className="mx-auto p-6 pb-1  text-white rounded-md shadow-dashboard">
        <div className="flex flex-wrap items-center justify-between mb-1 m-2">
          <div className="w-auto p-2">
            <h2 className="text-4xl font-semibold text-coolGray-900">Build</h2>
          </div>
        </div>

        <div className="flex flex-wrap m-4 space-y-3">

          {/* Element */}

          <div className="w-full">
            <Link onClick={handleOpenNewTab}>
              <div className="flex flex-wrap items-center justify-between p-1 border rounded-lg hover:scale-90 transition-transform duration-100">
                <div className="w-auto">
                  <div className="flex flex-wrap items-center m-2">
                    <div className="w-auto p-2">
                      <div className="flex items-center justify-center ounded-md">
                        <FaBitcoin className="text-white" size={'50px'} />
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <h2 className="text-lg font-medium text-coolGray-900">
                        Create your own token
                      </h2>
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          </div>

          <div className="w-full">
            <div className="flex flex-wrap items-center justify-between p-1 border rounded-lg hover:scale-90 transition-transform duration-100">
              <div className="w-auto">
                <div className="flex flex-wrap items-center m-2">
                  <div className="w-auto p-2">
                    <div className="flex items-center justify-center ounded-md">
                      <FaWallet className="text-white" size={'50px'} />
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <h2 className="text-lg font-medium text-coolGray-900">
                      Create wallet
                    </h2>
                  </div>
                </div>

              </div>
            </div>
          </div>



        </div>
      </div>
    </div >
  );
};

export default MyFiles;
