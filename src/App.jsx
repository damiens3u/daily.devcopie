import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import VerticalNavBar from './components/VerticalNavBar.jsx'
import CentralComponent from './components/CentralComponent.jsx'
import Image1 from './assets/component1.png'; 
import Image2 from './assets/component2.png'; 
import Image3 from './assets/component3.png'; 
import Image4 from './assets/component4.png'; 
import Image5 from './assets/component5.png'; 
import Image6 from './assets/component6.png'; 
import Image7 from './assets/component7.png'; 
import Image8 from './assets/component8.png'; 
import Image9 from './assets/component8.png'; 

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
      date :'Juin 2021', 
      readTime :'1m read time',
      imageUrl: Image2,
      upvotes: 128,
      comments: 24,
    },
    {
      title: 'Say no to console.log!',
      hashtag: 'JavaScript',
      date :'Juin 2021', 
      readTime :'1m read time',
      imageUrl: Image3,
      upvotes: 128,
      comments: 24,
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
  ];


  return (
    <div className="App">
      <Header />
      <VerticalNavBar
        li={[
          ['Dashboard', 'assets/dashboard.png'],
          ['Restautant’s', 'assets/dashboard.svg'],
          ['Manage User’s', 'assets/dashboard.svg'],
          ['Manage Order’s', 'assets/dashboard.svg'],
          ['Manage Coupon’s', 'assets/dashboard.svg'],
        ]}
      />
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
      {/* Pied de page ou autres sections */}
    </div>
  );
}
export default App
