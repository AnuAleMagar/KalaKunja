import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import logo1 from "../components/Images/namas.jpg"
import na from "../components/Images/gov.jpg";
import ma from "../components/Images/namas.jpg";
import Card3 from './Card3';
import Footer from '../components/Footer';


export default function TrainingInfo() {
  return (
    <div>
      <Navbar />

      <div class="container container1 mb-5 pt-5">
        <div class="row">

          <div class="col-lg-1 ">
          </div>



          <div class="col-lg-2  ">
            <Sidebar />
          </div>

          <div class="col-lg-9 row flex">
            <div class="flex">


              <div className='flex flex-col gap-y-5 ml-2'>

                {/* <Card2
                  source={logo1}
                  name="Namaste Community Foundation"
                  des="Namaste Community Foundation (NFC-Nepal) is a not-for-profit, non- people from around the world to get involved in social work."
                />

                <Card2
                  source={logo1}
                  name="Namaste Community Foundation"
                  des="Namaste Community Foundation (NFC-Nepal) is a not-for-profit, non- people from around the world to get involved in social work."
                /> */}

                {/* <Card2
                  source={logo1}
                  name="Namaste Community Foundation"
                  des="Namaste Community Foundation (NFC-Nepal) is a not-for-profit, non- people from around the world to get involved in social work."
                />

                <Card2
                  source={logo1}
                  name="Namaste Community Foundation"
                  des="Namaste Community Foundation (NFC-Nepal) is a not-for-profit, non- people from around the world to get involved in social work."
                />


                <Card2
                  source={logo1}
                  name="Namaste Community Foundation"
                  des="Namaste Community Foundation (NFC-Nepal) is a not-for-profit, non- people from around the world to get involved in social work."
                /> */}

                <Card3
                  source={logo1}
                  name="Namaste Community Foundation"
                  des="Namaste Community Foundation (NFC-Nepal) is a not-for-profit, non- people from around the world to get involved in social work."
                />

                <Card3
                  source={na}
                  name="Vocational and Skill Development Training Center"
                  des="Vocational and Skill Development Training Center (VSDTC), Gandaki Province (व्यावसायिक तथा सिप विकास तालीम केन्द्र, गण्डकी प्रदेश): A Vocational Training Center was established in Biratnagar in the year 2016 with the aim of solving the country's unemployment problem.
"    />

<Card3
                  source="https://plan-international.org/tachyon/sites/79/2022/11/20190401094201_IMG_1975-scaled.jpg?fit=1024%2C1024"
                  name="Plan International Nepal"
                  des="We create safe learning environments that meet girls’ specific needs in coordination with key stakeholders such as school management committees, teachers, local governments and girls themselves.


"    />


<Card3
                  source="https://images.squarespace-cdn.com/content/v1/5cd00dee4d546e1f76edae3f/1558872583563-H6B0B3ERJ1YL1ODL0CKT/IMG_1222.jpg"
                  name="Kumbeshwar Technical School"
                  des="KTS provides vocational training for women and young men in carpet weaving, hand knitting and carpentry.KTS supports people from an uneducated and low caste background, including physically disabled or destitute women.
"    />


<Card3
                  source={na}
                  name="Manakamana Training and Skill Development Institute"
                  des="Training service provider in short-term training courses affiliated with CTEVT. It is imparting vocational training in Nepal.
"    />






                {/* <Card2 />
                <Card />
                <Card />
                <Card /> */}
              {/* </div>
              <div class="flex">
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
              {/* </div> */} 
              {/* <div class="flex">
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
              {/* </div> */}
              {/* <div class="flex"> */}
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
              {/* </div>  */}



            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer />
</div>

  )
}