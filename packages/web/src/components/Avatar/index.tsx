import styled from 'styled-components';
import star from '../../assets/star';

export interface AvatarProps {
  src: string;
  size: number;
  borderSize: number;
}
const Avatar = styled.img<AvatarProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  border: ${(props) => props.borderSize}px solid #ff0000;
  src: ${(props) => props.src};
`;

const AvatarStarred: React.SFC<AvatarProps & { isStarred?: boolean }> = ({ isStarred, ...props }) => {
  if (!isStarred) {
    return <Avatar {...props} />;
  }
  return (
    <div style={{ position: 'relative' }}>
      <Avatar {...props} />
      <div style={{ left: '75%', top: '40%', zIndex: -1, position: 'absolute' }}>{star}</div>
    </div>
  );
};

export default AvatarStarred;
