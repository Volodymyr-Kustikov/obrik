import logo from './logo.svg';
import './App.css';
import { Logo } from './logo/logo';
import { Content } from './content/content';
import { NavBar } from './navBar/navBar';
import { SideBar } from './sideBar/sideBar';
import { Button } from './button/button';
import {React, useState, useEffect } from 'react';


import rolesData from './db.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedRoles, setHighlightedRoles] = useState([]);
  const [highlightedApostiles1, setHighlightedApostiles1] = useState([]);
  const [highlightedApostiles2, setHighlightedApostiles2] = useState([]);
  const [highlightedApostiles3, setHighlightedApostiles3] = useState([]);
  const [highlightedApostiles4, setHighlightedApostiles4] = useState([]);
  const [highlightedPaperwork1, sethighlightedPaperwork1] = useState([]);
  const [highlightedPaperwork2, sethighlightedPaperwork2] = useState([]);
  const [highlightedDodatok, sethighlightedDodatok] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const highlightText = (text) => {
    if (!searchTerm) {
      return text;
    }

    const regex = new RegExp(`(${searchTerm})`, 'giu');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <span key={index} style={{ backgroundColor: '#9eedf0' }}>{part}</span> : part
    );
  };

  useEffect(() => {
    const updatedHighlightedRoles = rolesData.roles.map((item) => ({
      id: item.id,
      role: highlightText(item.role),
      functions: item.functions.map((func) =>
        typeof func === 'string' ? highlightText(func) : func
      ),
      zones_of_responsibility: item.zones_of_responsibility.map((zone) =>
        typeof zone === 'string' ? highlightText(zone) : zone
      ),
      subordination: highlightText(item.subordination),
    }));

    setHighlightedRoles(updatedHighlightedRoles);

    const updatedHighlightedApostiles1 = rolesData.apostilles.ministryofjustice.map((item) => ({
      id: item.id,
      doc: highlightText(item.doc),
      requirements: item.requirements.map((requirement) =>
        typeof requirement === 'string' ? highlightText(requirement) : requirement
      ),
      terms: item.terms.map((term) =>
        typeof term === 'string' ? highlightText(term) : term
      ),
      price: item.price.map((price) =>
        typeof price === 'string' ? highlightText(price) : price
      ),
    }));

    setHighlightedApostiles1(updatedHighlightedApostiles1);

    const updatedHighlightedApostiles2 = rolesData.apostilles.ministryofinternalaffairs.map((item) => ({
      id: item.id,
      doc: highlightText(item.doc),
      requirements: item.requirements.map((requirement) =>
        typeof requirement === 'string' ? highlightText(requirement) : requirement
      ),
      terms: item.terms.map((term) =>
        typeof term === 'string' ? highlightText(term) : term
      ),
      price: item.price.map((price) =>
        typeof price === 'string' ? highlightText(price) : price
      ),
    }));

    setHighlightedApostiles2(updatedHighlightedApostiles2);

    const updatedHighlightedApostiles3 = rolesData.apostilles.ministryofeducation.map((item) => ({
      id: item.id,
      doc: highlightText(item.doc),
      requirements: item.requirements.map((requirement) =>
        typeof requirement === 'string' ? highlightText(requirement) : requirement
      ),
      terms: item.terms.map((term) =>
        typeof term === 'string' ? highlightText(term) : term
      ),
      price: item.price.map((price) =>
        typeof price === 'string' ? highlightText(price) : price
      ),
    }));

    setHighlightedApostiles3(updatedHighlightedApostiles3);


    const updatedHighlightedApostiles4 = rolesData.apostilles.ministryofinternationalaffairs.map((item) => ({
      id: item.id,
      doc: highlightText(item.doc),
      requirements: item.requirements.map((requirement) =>
        typeof requirement === 'string' ? highlightText(requirement) : requirement
      ),
      terms: item.terms.map((term) =>
        typeof term === 'string' ? highlightText(term) : term
      ),
      price: item.price.map((price) =>
        typeof price === 'string' ? highlightText(price) : price
      ),
    }));

    setHighlightedApostiles4(updatedHighlightedApostiles4);

    const updatedhighlightedPaperwork1 = rolesData.paperwork1.map((item) => ({
      id: item.id,
      type: highlightText(item.type),
      rules: highlightText(item.rules),
      ukr: highlightText(item.ukr),
      eng: highlightText(item.eng),
      de: highlightText(item.de),
    }));

    sethighlightedPaperwork1(updatedhighlightedPaperwork1);


    const updatedhighlightedPaperwork2 = rolesData.paperwork2.map((item) => ({
      id: item.id,
      type: highlightText(item.type),
      rules: highlightText(item.rules),
      source: item.source.map((source) =>
        typeof source === 'string' ? highlightText(source) : source
      ),
      translated: item.translated.map((translated) =>
        typeof translated === 'string' ? highlightText(translated) : translated
      ),
      note: highlightText(item.note),
    }));

    sethighlightedPaperwork2(updatedhighlightedPaperwork2);

    const updatedhighlightedDodatok = rolesData.dodatok.map((item) => ({
      id: item.id,
      col1: highlightText(item.col1),
      col2: highlightText(item.col2),
      col3: highlightText(item.col3),
      col4: highlightText(item.col4),
      col5: highlightText(item.col5),
    }));

    sethighlightedDodatok(updatedhighlightedDodatok);





  }, [searchTerm]);

  return (
    <div className="App">

      <div className='header'>

        <div className='logo'>

          < Logo />
        </div>

        <div className='navBar'>
          < NavBar searchTerm={searchTerm} handleSearch={handleSearch} highlightText={highlightText}/>
        </div>
      </div>

      <div className='main'>

        <div className='Button'>
          < Button/>
        </div>


        <div className='content'>

          < Content searchTerm={searchTerm} highlightedDodatok={highlightedDodatok} highlightText={highlightText} highlightedApostiles1={highlightedApostiles1} highlightedApostiles2={highlightedApostiles2} highlightedApostiles3={highlightedApostiles3} highlightedApostiles4={highlightedApostiles4} highlightedRoles={highlightedRoles} highlightedPaperwork1 ={highlightedPaperwork1} highlightedPaperwork2 = {highlightedPaperwork2}/>
        </div>
      </div>
    </div>
  );
}

export default App;
