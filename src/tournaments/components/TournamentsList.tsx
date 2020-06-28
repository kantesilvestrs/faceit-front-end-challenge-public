import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentTournamentList } from '../store/selectors';
import { Container as div, H6 } from '../../ui/components';
import styled from 'styled-components';

const TournamentListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TournamentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 280px;
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.palette.background.alt1};
`;

interface TournamentsListProps {
  searchTerm?: string;
}

export const TournamentsList = (props: TournamentsListProps) => {
  const { searchTerm } = props;

  const tournaments = useSelector(getCurrentTournamentList);

  return (
    <TournamentListWrapper>
      {tournaments.map(({ id, name }) => (
        <TournamentBox key={id}>
          <H6>{name}</H6>
        </TournamentBox>
      ))}
    </TournamentListWrapper>
  );
};
