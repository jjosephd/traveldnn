import React from 'react';
import ContentIndex from './ContentIndex';
import img2 from '../../assets/images/img2.jpeg';
import img3 from '../../assets/images/img3.jpeg';
import img4 from '../../assets/images/img4.jpeg';
import img5 from '../../assets/images/img5.jpeg';

function Content() {
  return (
    <div className="content">
      <section className="content-header">
        <header>Living Life</header>
        <h4>One Destination At a Time</h4>
      </section>
      <section className="main-wrap">
        <header>Browse Popular Options</header>
        <div className="table-wrap">
          <table className="content-table">
            <tr>
              <td>
                <ContentIndex
                  imgUrl="https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/06/GettyImages-1198570720.jpg"
                  text="Tropical"
                />
              </td>
              <td>
                <ContentIndex imgUrl={img2} text="Adventure" />
              </td>
              <td>
                <ContentIndex imgUrl={img3} text="Tropical" />
              </td>
              <td>
                <ContentIndex imgUrl={img4} />
              </td>
              <td>
                <ContentIndex imgUrl={img5} />
              </td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Content;
