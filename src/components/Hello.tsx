import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchTab from "./SearchTab";
import SpdBanner from "./SpdBanner";
import Image from 'react-bootstrap'
export interface HelloProps {
   compiler: string;
   framework: string;
}

export class Hello extends React.Component<HelloProps, any> {

   // this constructor is necessary to make the props work
   constructor(props: HelloProps, context: any) {
      super(props, context);
   }
   render() {
      return (<div>
          <Header/>
          <div className="container">
         <div className="jumbotron">
            <h1>Sears Parts Direct Demo Page </h1>            
         </div>
         <SearchTab/>
           <SpdBanner/> 
         <Footer/>
         </div>
   </div>);
   }
}