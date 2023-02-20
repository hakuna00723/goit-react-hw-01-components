import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aquamarine;
  padding-top: 60px;
  padding-bottom: 60px;
  width: 360px;
  border-radius: 10px;
  margin: 50px auto;
`;

export const ProfileInfo = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const ProfileImg = styled.img`
  display: block;
  height: 220px;
  width: 200px;
  margin-top: 20px;
`;

export const ProfileName = styled.p`
  font-size: 30px;
  line-height: 1.62;
  font-weight: 900;
  color: #0f0f4f;
  margin-top: 20px;
`;

export const ProfileTag = styled.p`
  margin-top: -10px;
  font-size: 20px;
  line-height: 1;
  font-weight: 800;
  color: #535421;
  text-decoration: underline;
`;

export const ProfileLocation = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1;
  font-weight: 800;
  color: #484137;
  text-decoration: underline;
`;

export const ProfileStatistics = styled.ul`
  min-width: 320px;
  background-color: #fff;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ProfileStatsPart = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileStatsTittle = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 1.62;
  font-weight: 500;
  text-align: center;
  color: grey;
`;

export const ProfileStatsQuantity = styled.span`
  color: violet;
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: 800;
  margin: 5px auto;
`;
