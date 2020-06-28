import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  getCurrentTournamentList,
  getTournamentFetchStatus
} from '../store/selectors';
import styled from 'styled-components';
import { TournamentListItem } from './TournamentListItem';

const PageInformation = styled.div`
  width: 100%;
  position: relative;
  float: left;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

const TournamentListWrapper = styled.div`
  width: 100%;
`;

interface TournamentsListProps {
  searchTerm?: string;
}

export const TournamentsList = (props: TournamentsListProps) => {
  // TODO: Implement more specific memoization
  const tournaments = useSelector(getCurrentTournamentList);
  const fetchStatus = useSelector(getTournamentFetchStatus);

  const handleOnItemEditClick = useCallback((id: string) => {}, []);
  const handleOnItemDeleteClick = useCallback((id: string) => {}, []);

  return useMemo(
    () => (
      <TournamentListWrapper>
        {fetchStatus && (
          <PageInformation>Loading tournaments...</PageInformation>
        )}
        {!fetchStatus && (
          <>
            {tournaments.map(
              ({ id, name, organizer, participants, startDate, game }) => (
                <TournamentListItem
                  key={id}
                  id={id}
                  name={name}
                  organizer={organizer}
                  game={game}
                  currentParticipants={participants.current}
                  maxParticipants={participants.max}
                  startDate={startDate}
                  onEditClick={handleOnItemEditClick}
                  onDeleteClick={handleOnItemDeleteClick}
                />
              )
            )}
            {tournaments.length > 0 && (
              <PageInformation>
                {`Showing 1-${tournaments.length} tournaments`}
              </PageInformation>
            )}
            {tournaments.length === 0 && (
              <PageInformation>{`No tournaments found`}</PageInformation>
            )}
          </>
        )}
      </TournamentListWrapper>
    ),
    [tournaments, fetchStatus, handleOnItemDeleteClick, handleOnItemEditClick]
  );
};
