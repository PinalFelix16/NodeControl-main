import React from "react";

// components

export default function AlumnoCard({name="Sin nombre", id="Sin id", bDate="X", studentPhone="X", phone1="X", phone2="X", parent1="X", parent2="X", medical="X", address="Durango, dgo."}) {
  return (
    <>
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16" style={{maxWidth:"600px", margin:"auto", marginTop:"90px"}}>
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src="/img/default-avatar.svg"
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
              
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {address}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-calendar mr-2 text-lg text-blueGray-400"></i>
              {bDate}
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
              {studentPhone}
            </div>
          </div>
          
          <div className="w-full px-4 text-center mt-10">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
                    {parent1}
                  </span>
                  <span className="text-sm text-blueGray-400">Tutor 1</span>
                </div>
                
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {phone1}
                 </span>
                  <span className="text-sm text-blueGray-400">(Celular)</span>
                </div>
              </div>
            </div>
            <div className="w-full px-4 text-center mt-10">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
                    {parent2}
                  </span>
                  <span className="text-sm text-blueGray-400">Tutor 2</span>
                </div>
                
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {phone2}
                  </span>
                  <span className="text-sm text-blueGray-400">(Celular)</span>
                </div>
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    Historial Medico: <br></br>
               {medical}
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
