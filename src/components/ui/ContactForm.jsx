import styled from 'styled-components';
import { useForm } from 'react-hook-form';
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <input
            defaultValue=""
            placeholder="Name"
            {...register('name', { required: true })}
            className="name"
          />
          {errors.name && <span>Can't be empty</span>}
          <input
            defaultValue=""
            placeholder="Email Address"
            {...register('email')}
            className="email"
          />
          <input
            defaultValue=""
            placeholder="Phone"
            {...register('phone')}
            className="phone"
          />
          <textarea
            cols="30"
            rows="10"
            {...register('message')}
            className="message"
            placeholder="Your Message"
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  form {
    display: grid;
  }
  .form-container {
    display: grid;
    gap: 1.5rem;
  }
  .btn {
    text-transform: uppercase;
    font-size: var(--fs-p);
    font-weight: var(--fw-400);
    line-height: var(--lh-h3);
    letter-spacing: var(--spacing-btn);
    padding: 1rem 3rem;
    margin-inline: auto;
    margin-top: 2.5rem;
    color: var(--clr-black);
  }
  input,
  textarea {
    background-color: transparent;
    border: none;
    padding: 1rem;
    color: var(--clr-white);
    font-family: var(--ff-main);
    border-bottom: 1px solid var(--clr-white);
    border-radius: 0;
  }
  input::placeholder,
  textarea::placeholder {
    color: var(--clr-white);
    opacity: 0.5;
    font-size: var(--fs-btn-p);
    font-weight: var(--fw-400);
    line-height: var(--lh-btn-p);
    font-family: var(--ff-main);
  }
  input:focus,
  textarea:focus {
    outline: transparent;
  }
`;

export default ContactForm;
