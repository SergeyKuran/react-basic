import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  return (
    <div>
      <LeaderBoard>
        <BoardHeader>
          <BoardTitle>
            <TitleTop>Forbes</TitleTop>
            <TitleBottom>Leader board</TitleBottom>
          </BoardTitle>
        </BoardHeader>

        <LeaderBoardProfiles>
          {list.map(({ avatar, name, capital, isIncrease }) => {
            return (
              <ForbesListItem
                key={name}
                avatar={avatar}
                name={name}
                capital={capital}
                isIncrease={isIncrease}
              />
            );
          })}
        </LeaderBoardProfiles>
      </LeaderBoard>
    </div>
  );
};
