import React from 'react';
import styled from 'styled-components';
import H6 from '../../ui/components/H6';
import Button from '../../ui/components/Button';
import moment from 'moment';

const TournamentHeader = styled(H6)`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const TournamentBoxButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const TournamentBoxButton = styled(Button)`
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

const TournamentDetail = styled.p`
  padding: 0;
  margin: 0;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const TournamentBox = styled.div`
  display: block;
  width: 272px;
  position: relative;
  float: left;
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-right: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  background-color: ${({ theme }) => theme.palette.background.alt1};

  &:nth-child(3n + 3) {
    margin-right: 0;
  }
`;

interface TournamentListItemProps {
  id: string;
  name: string;
  organizer: string;
  game: string;
  currentParticipants: number;
  maxParticipants: number;
  startDate: string;
  onEditClick: (id: string, name: string) => void;
  onDeleteClick: (id: string) => void;
}

export const TournamentListItem = (props: TournamentListItemProps) => {
  const {
    id,
    name,
    organizer,
    game,
    currentParticipants,
    maxParticipants,
    startDate,
    onEditClick,
    onDeleteClick
  } = props;

  const handleEditButtonOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onEditClick(id, name);
  };

  const handleDeleteButtonOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onDeleteClick(id);
  };

  return (
    <TournamentBox>
      <TournamentHeader title={name}>{name}</TournamentHeader>
      <TournamentDetail title={organizer}>
        Organizer: {organizer}
      </TournamentDetail>
      <TournamentDetail title={game}>Game: {game}</TournamentDetail>
      <TournamentDetail>
        Participants: {currentParticipants}/{maxParticipants}
      </TournamentDetail>
      <TournamentDetail title={startDate}>
        Start:
        {moment(new Date(startDate))
          .locale('en-GB')
          .format('DD/MM/YYYY, HH:MM:SS')}
      </TournamentDetail>
      <TournamentBoxButtonWrap>
        <TournamentBoxButton
          onClick={handleEditButtonOnClick}
          title={'Edit tournament'}
        >
          Edit
        </TournamentBoxButton>
        <TournamentBoxButton
          onClick={handleDeleteButtonOnClick}
          title={'Delete tournament'}
        >
          Delete
        </TournamentBoxButton>
      </TournamentBoxButtonWrap>
    </TournamentBox>
  );
};
