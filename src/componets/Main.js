import React, { useEffect } from 'react'

function Main() {

    useEffect(()=>{
        let updatatime=()=>{
        let a=new Date();
        let usa=document.getElementById("us");
        let india=document.getElementById('india');
        let china=document.getElementById('china');
        usa.innerHTML=a.toLocaleString('en-US',{
            timeZone:'America/Los_Angeles'
        }).split(", ")[1]
        india.innerHTML=a.toLocaleString('en-US',{
            timeZone:'Asia/Kolkata'
        }).split(", ")[1]
        china.innerHTML=a.toLocaleString('en-US',{
            timeZone:'Asia/Shanghai'
        }).split(", ")[1]
        let alarm=document.getElementById("alarm");
        let alarmhour=alarm.value.split(":")[0]
        let alarmmin=alarm.value.split(":")[1]

        console.log(alarmhour,":",alarmmin,":",a.getSeconds());
        if(a.getHours()==alarmhour &&a.getMinutes()==alarmmin){
            console.log("alarm ringing")
        }
    }
    setInterval(() => {
        updatatime();
    }, 1000);
    },[])
  return (
    <>
    <main className='container my-3'>
        <h1 className='text-center'>Hare krishna to World clock</h1>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">India <i className='bi bi-clock'></i></h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title" id='india'></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">More about this zone</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">United States <i className='bi bi-clock'></i></h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title" id='us'></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">More about this zone</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm ">
          <div className="card-header py-3  ">
            <h4 className="my-0 fw-normal">China <i className='bi bi-clock'></i></h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title" id='china'></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">More about this zone</button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div className="container">
    <label htmlFor="appt">Select a time for alarm:</label>
    <input type="time" name="alarm" id="alarm" />
  </div>
    </>
  )
}

export default Main
