import styled from '@emotion/styled';

export const StatisticsBox = styled.section`
  width: 400px;
  padding: 50px 20px;
  background-color: aquamarine;
  border-radius: 10px;
  margin: 0 auto;
`;
export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: #183e6c;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 30px;
`;
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  background-color: white;
  border-radius: 10px;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 0;
  text-align: center;
  font-size: 16px;
  color: #000;
  width: 50px;
  padding: 5px;
`;

export const StatisticsTxt = styled.span`
  font-size: 16px;
  line-height: 1;
  font-weight: 700;
  color: blue;
  margin-bottom: 10px;
`;
