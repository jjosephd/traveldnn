import React from 'react';
import { FaWater } from 'react-icons/fa';
import { FiShield } from 'react-icons/fi';
import { TbCoffee } from 'react-icons/tb';
import { BsPeople } from 'react-icons/bs';
function Description() {
  return (
    <div>
      <div className="icon-container">
        <div className="water-container">
          <article>
            <div id="water">
              <FaWater />
            </div>
            <h5>Exotic Locations</h5>
            <p>Exciting once-in-a-lifetime adventures</p>
          </article>
        </div>
        <div className="shield-container">
          <article>
            <div id="shield">
              <FiShield />
            </div>
            <h5>Safe & Secure</h5>
            <p>Around the clock support for our valued members.</p>
          </article>
        </div>
        <div className="coffee-container">
          <article>
            <div id="coffee">
              <TbCoffee />
            </div>
            <h5>Valued Comfort</h5>
            <p>Going the extra mile to ensure an easy stay.</p>
          </article>
        </div>
        <div className="people-container">
          <article>
            <div id="people">
              <BsPeople />
            </div>
            <h5>Community of Travelers</h5>
            <p>Join our large community of active world-travelers</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Description;
