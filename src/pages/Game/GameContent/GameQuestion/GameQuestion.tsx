import React from 'react';
import BirdCard from '../../../../components/BirdCard/BirdCard';
import classes from './GameQuestion.module.scss';
import { IBird } from '../../../../context/BirdsContext';

interface IProps {
  question: IBird;
  correctAnswer: IBird | undefined;
}

const GameQuestion: React.FC<IProps> = ({ question, correctAnswer }) => {
  return (
    <section className={classes.question}>
      {<BirdCard bird={question} hide={!!!correctAnswer} />}
    </section>
  );
};

export default GameQuestion;
