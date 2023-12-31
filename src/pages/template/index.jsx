import React, {useState} from 'react';
import Header from '../../components/Template/Header';
import Sidebar from '../../components/Template/Sidebar';
import Content from '../../components/Template/Content';

import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
      <div>

        <div className='flex'>
          <div className='w-80 absolute lg:relative'>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
          <div className='w-full'>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isLogo={false}/>

            <div className='h-6 bg-site_light-100 text-white text-center text-sm font-bold w-full'>
              {t("future")} of WatSom 🎉
            </div>
            <Content />
          </div>
        </div>

        {/* <div className='flex h-full'>
          <div style={{minWidth: "20rem"}}>
            <Sidebar/>
          </div>
          <div style={{width: " calc(100wh - 20rem) "}}>
            <Header />

            <div className='h-6 bg-site_light-100 text-white text-center text-sm font-bold w-full'>
              {t("future")} of WatSom 🎉
            </div>
            <Content />
          </div>
        </div> */}

      </div>
  );
}
