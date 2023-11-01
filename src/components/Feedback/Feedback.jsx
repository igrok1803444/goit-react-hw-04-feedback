import { ButtonsList, FeedbackButton } from './Feedback.styled';
export const Feedback = ({ handleFunction, options }) => {
  const optionsArray = Object.keys(options);
  return (
    <ButtonsList>
      {optionsArray.map((option, index) => (
        <li key={index}>
          <FeedbackButton type="button" onClick={handleFunction}>
            {option}
          </FeedbackButton>
        </li>
      ))}
    </ButtonsList>
  );
};
