// src/check.js
import { color } from 'chart.js/helpers';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../style/check.css'
import { Link } from 'react-router-dom';


class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 13, 55, 12, 43, 22,18],
      options: {
        chart: {
            type: 'pie',
           
        },
        labels: ['angry', 'disgust', 'scared', 'happy', 'sad', 'surprised', 'netural'],
        colors : ['#FFBBBB','#E1F9D6','#FFF6C5','#96B6EF','#E1C8F8','#F9EBEB','#FFDFCD'],

          dataLabels: {
            enabled: true, // 데이터 레이블을 활성화
            style: {
              colors: ['black'], // 원하는 색상 코드로 변경
              fontSize:['20px'],
              textShadow: ['none'] // 그림자 제거
            }
          },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom',
            
            }
          }
        }]
      }
    };
  }
   

  render() {

    const ChStyle={
        position: 'absolute',
        top:'200px',
        left: '100px', 
    };

    const ConsultResultStyle={
        position: 'relative',
          width: '800px',
          height: '500px', 
          backgroundColor:'white',
          top: '-530px',
          left:'800px',
          borderRadius: '20px',
          overflow: 'scroll',
          overflowX: 'hidden',
          padding:'10px',
          margin: '0'
    };

      const SaveButtonStyle = {
          width: '150px',
          height: '50px',
          color: 'black',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: '20px',
          position: 'relative',
          bottom: '500px',
          left: '1550px'
          
      };

    return (
      <div style={ChStyle}>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={680} height={680}/>
        </div>
        <div id="html-dist"></div>

        <div style={ConsultResultStyle}><h2>상담결과</h2></div>
        <Link to="/profile" style={{ textDecoration: 'none' }}> {/* Link에 기본 스타일 제거 */}
            <button style={SaveButtonStyle}>결과 저장</button>
          </Link>
      </div>
    );
  }
}

export default ApexChart;
