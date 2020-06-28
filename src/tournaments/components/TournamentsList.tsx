import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  getCurrentTournamentList,
  getTournamentFetchStatus,
  getTournamentError
} from '../store/selectors';
import styled from 'styled-components';
import { TournamentListItem } from './TournamentListItem';
import Button from '../../ui/components/Button';

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
  handleItemEdit: (id: string, name: string) => void;
  handleItemDelete: (id: string) => void;
  onRetry: () => void;
}

export const TournamentsList = (props: TournamentsListProps) => {
  const { onRetry, handleItemDelete, handleItemEdit } = props;
  // TODO: Implement more specific memoization
  const tournaments = useSelector(getCurrentTournamentList);
  const fetchStatus = useSelector(getTournamentFetchStatus);
  const fetchError = useSelector(getTournamentError);

  return useMemo(
    () => (
      <TournamentListWrapper>
        {fetchStatus ? (
          <PageInformation>Loading tournaments...</PageInformation>
        ) : (
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
                  onEditClick={handleItemEdit}
                  onDeleteClick={handleItemDelete}
                />
              )
            )}
            {tournaments.length > 0 ? (
              <PageInformation>
                {`Showing 1-${tournaments.length} tournaments`}
              </PageInformation>
            ) : (
              <>
                {fetchError ? (
                  <>
                    <PageInformation>{`Something went wrong`}</PageInformation>
                    <PageInformation>
                      <Button onClick={onRetry}>Retry</Button>
                    </PageInformation>
                  </>
                ) : (
                  <PageInformation>{`No tournaments found`}</PageInformation>
                )}
              </>
            )}
          </>
        )}
      </TournamentListWrapper>
    ),
    [
      tournaments,
      fetchStatus,
      handleItemDelete,
      handleItemEdit,
      onRetry,
      fetchError
    ]
  );
};
