import Avatar from '.';
import StoryApp from '../../app/StoryApp';
import defaultAvatar from '../../assets/avatars';

const AvatarWrapper: React.SFC<{ label: string }> = ({ label, children }) => (
  <div style={{ display: 'flex', alignContent: 'center', padding: 10 }}>
    {children}
    <div style={{ margin: 10 }}>{label}</div>
  </div>
);

const Size54 = () => <Avatar size={54} borderSize={2} src={defaultAvatar} />;

const Size40 = () => <Avatar size={40} borderSize={1} src={defaultAvatar} />;

const Size40Starred = () => <Avatar size={40} borderSize={1} src={defaultAvatar} isStarred />;

export const Avatars = () => (
  <StoryApp>
    <div>
      <AvatarWrapper label='Size 54'>
        <Size54 />
      </AvatarWrapper>
      <AvatarWrapper label='Size 40'>
        <Size40 />
      </AvatarWrapper>
      <AvatarWrapper label='Size 40 Star'>
        <Size40Starred />
      </AvatarWrapper>
    </div>
  </StoryApp>
);

export default { title: 'Avatar Stories' };
