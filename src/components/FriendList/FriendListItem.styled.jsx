import styled from '@emotion/styled';

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-bottom: 20px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-weight: 900;
`;

export const FriendItem = styled.li`
  margin: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
`;
