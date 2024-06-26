import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import VerticalNavBar from './components/VerticalNavBar.jsx'
import CentralComponent from './components/CentralComponent.jsx'
import Footer from './components/Footer.jsx';
import Image1 from './assets/component1.png'; 
import Image2 from './assets/component2.png'; 
import Image3 from './assets/component3.png'; 
import Image4 from './assets/component4.png'; 
import Image5 from './assets/component5.png'; 
import Image6 from './assets/component6.png'; 
import Image7 from './assets/component7.png'; 
import Image8 from './assets/component8.png'; 
import Image9 from './assets/component9.png'; 
import Image10 from './assets/component10.png'; 
import Image11 from './assets/component11.png'; 
import Image12 from './assets/component12.png'; 
import Image13 from './assets/component13.png'; 
import Image14 from './assets/component14.png'; 
import Image15 from './assets/component15.png'; 
import Image16 from './assets/component16.png'; 
import Image17 from './assets/component17.png'; 
import Image18 from './assets/component18.png'; 
import Image19 from './assets/component19.png'; 
import Image20 from './assets/component20.png'; 
import Image21 from './assets/component21.png'; 

function App() {
  // Exemple de données pour les composants centraux
  const componentsData = [
    {
      title: 'Essential VS Code Extensions for Front-End Development in 2024',
      hashtag: 'frontend',
      date :'Juin 2021', 
      readTime :'1m read time',
      imageUrl: Image1,
      upvotes: 128,
      comments: 24,
    },
    {
      title: 'API Design 101: From Basics to Best Practices',
      hashtag: 'architecture',
      date :'January 2022', 
      readTime :'10m read time',
      imageUrl: Image2,
      upvotes: 181,
      comments: 29,
    },
    {
      title: 'Say no to console.log!',
      hashtag: 'JavaScript',
      date :'May 2024', 
      readTime :'1h read time',
      imageUrl: Image3,
      upvotes: 56,
      comments: 6,
    },
    {
      title: '17 Best Developer Productivity Tools to Try',
      hashtag: 'ai',
      date :'February 2021', 
      readTime :'30m read time',
      imageUrl: Image4,
      upvotes: 112,
      comments: 41,
    },
    {
      title: '20 Essential Browser Extensions For Web Developers',
      hashtag: 'webdev',
      date :'September 2021', 
      readTime :'9m read time',
      imageUrl: Image5,
      upvotes: 212,
      comments: 37,
    },
    {
      title: 'Visual Programming. For Developers',
      hashtag: 'typescript',
      date :'October 2021', 
      readTime :'23m read time',
      imageUrl: Image6,
      upvotes: 120,
      comments: 12,
    },
    {
      title: 'Writing Logic in CSS',
      hashtag: 'css',
      date :'December 2020', 
      readTime :'35m read time',
      imageUrl: Image7,
      upvotes: 320,
      comments: 118,
    },
    {
      title: 'Thind UI - Component library for Webflow apps',
      hashtag: 'devtools',
      date :'March 2021', 
      readTime :'6m read time',
      imageUrl: Image8,
      upvotes: 18,
      comments: 42,
    },
    {
      title: 'How to reduce unused JavaScript in your code?',
      hashtag: 'webdev',
      date :'April 2021', 
      readTime :'12m read time',
      imageUrl: Image9,
      upvotes: 128,
      comments: 98,
    },
    {
      title: '17 Best Developer Productivity Tools to Try',
      hashtag: 'ai',
      date :'Juin 2021', 
      readTime :'1m read time',
      imageUrl: Image4,
      upvotes: 128,
      comments: 24,
    },
    {
      title: '20 Essential Browser Extensions For Web Developers',
      hashtag: 'webdev',
      date :'Juin 2021', 
      readTime :'1m read time',
      imageUrl: Image5,
      upvotes: 128,
      comments: 24,
    },
    {
      title: 'Visual Programming. For Developers',
      hashtag: 'typescript',
      date :'Juin 2021', 
      readTime :'1m read time',
      imageUrl: Image6,
      upvotes: 128,
      comments: 24,
    },
    {
      title: 'Writing Logic in CSS',
      hashtag: 'css',
      date :'Juin 2021', 
      readTime :'1m read time',
      imageUrl: Image7,
      upvotes: 128,
      comments: 24,
    },
    {
      title: 'Thind UI - Component library for Webflow apps',
      hashtag: 'devtools',
      date :'Juin 2021', 
      readTime :'1m read time',
      imageUrl: Image8,
      upvotes: 128,
      comments: 24,
    },
    {
      title: 'How to reduce unused JavaScript in your code?',
      hashtag: 'webdev',
      date :'Juin 2021', 
      readTime :'1m read time',
      imageUrl: Image9,
      upvotes: 128,
      comments: 24,
    },
    {
      title: '17 Best Developer Productivity Tools to Try',
      hashtag: 'ai',
      date :'Juin 2021', 
      readTime :'1m read time',
      imageUrl: Image10,
      upvotes: 498,
      comments: 11,
    },
    {
      title: '20 Essential Browser Extensions For Web Developers',
      hashtag: 'webdev',
      date :'August 2021', 
      readTime :'10m read time',
      imageUrl: Image11,
      upvotes: 171,
      comments: 100,
    },
    {
      title: 'Visual Programming. For Developers',
      hashtag: 'typescript',
      date :'May 2022', 
      readTime :'0m read time',
      imageUrl: Image12,
      upvotes: 18,
      comments: 2,
    },
    {
      title: 'Writing Logic in CSS',
      hashtag: 'css',
      date :'November 2023', 
      readTime :'1m read time',
      imageUrl: Image13,
      upvotes: 12,
      comments: 0,
    },
    {
      title: 'Thind UI - Component library for Webflow apps',
      hashtag: 'devtools',
      date :'June 2021', 
      readTime :'1m read time',
      imageUrl: Image14,
      upvotes: 128,
      comments: 24,
    },
    {
      title: 'How to reduce unused JavaScript in your code?',
      hashtag: 'webdev',
      date :'July 2022', 
      readTime :'17m read time',
      imageUrl: Image15,
      upvotes: 321,
      comments: 12,
    },
    {
      title: '17 Best Developer Productivity Tools to Try',
      hashtag: 'ai',
      date :'January 2023', 
      readTime :'1m read time',
      imageUrl: Image16,
      upvotes: 234,
      comments: 9,
    },
    {
      title: '20 Essential Browser Extensions For Web Developers',
      hashtag: 'webdev',
      date :'September 2023', 
      readTime :'17m read time',
      imageUrl: Image17,
      upvotes: 180,
      comments: 19,
    },
    {
      title: 'Visual Programming. For Developers',
      hashtag: 'typescript',
      date :'December 2023', 
      readTime :'2h read time',
      imageUrl: Image18,
      upvotes: 378,
      comments: 89,
    },
    {
      title: 'Writing Logic in CSS',
      hashtag: 'css',
      date :'May 2021', 
      readTime :'1m read time',
      imageUrl: Image19,
      upvotes: 128,
      comments: 24,
    },
    {
      title: 'Thind UI - Component library for Webflow apps',
      hashtag: 'devtools',
      date :'March 2021', 
      readTime :'1m read time',
      imageUrl: Image20,
      upvotes: 99,
      comments: 34,
    },
    {
      title: 'How to reduce unused JavaScript in your code?',
      hashtag: 'webdev',
      date :'July 2021', 
      readTime :'1m read time',
      imageUrl: Image21,
      upvotes: 18,
      comments: 4,
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <VerticalNavBar />
        <div className="central-components">
          {componentsData.map((data, index) => (
            <CentralComponent
              key={index}
              title={data.title}
              hashtag={data.hashtag}
              date={data.date}
              readTime={data.readTime}
              imageUrl={data.imageUrl}
              upvotes={data.upvotes}
              comments={data.comments}
            />
          ))}
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

  
export default App
