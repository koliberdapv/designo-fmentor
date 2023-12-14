import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const ContactForm = () => {
  const [formValues, setFormValues] = useState('clear');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Your message has been sent!', {
      position: toast.POSITION.TOP_CENTER,
    });
    setFormValues('filled');
    return;
  };

  const inputsList = [
    {
      id: 1,
      defaultValue: '',
      placeholder: 'Name',
      name: 'name',
      type: 'text',
    },
    {
      id: 2,
      defaultValue: '',
      placeholder: 'Email Address',
      name: 'email',
      type: 'email',
    },
    {
      id: 3,
      defaultValue: '',
      placeholder: 'Phone',
      name: 'phone',
      type: 'tel',
    },
    {
      id: 4,
      defaultValue: '',
      placeholder: 'Your Message',
      name: 'message',
      type: 'textarea',
    },
  ];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (formValues === 'filled') {
      inputsList.forEach((input) => {
        const { name } = input;
        document.querySelector(`.${name}`).value = '';
      });
      setFormValues('clear');
    }
  }, [formValues]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          {inputsList.map((input) => {
            const { id, defaultValue, placeholder, name, type } = input;
            return (
              <div className="input-container" key={id}>
                {type === 'textarea' ? (
                  <textarea
                    cols="30"
                    rows="5"
                    {...register(name, { required: true })}
                    className={name}
                    placeholder={placeholder}
                  />
                ) : (
                  <input
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    type={type}
                    {...register(name, {
                      required: true,
                      pattern: name === 'email' ? emailRegex : undefined,
                    })}
                    className={name}
                  />
                )}
                {errors[name] && (
                  <span className="error">
                    Can't be empty
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <circle cx="10" cy="10" r="10" fill="white" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 5H9V12H11V5ZM11 14H9V16H11V14Z"
                        fill="#E7816B"
                      />
                    </svg>
                  </span>
                )}
              </div>
            );
          })}
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
    gap: 1rem;
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
    border-radius: 0;
    position: relative;
    isolation: isolate;
    width: 100%;
  }
  textarea {
    resize: none;
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
    cursor: pointer;
  }
  .input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--clr-white);
    margin-bottom: 2px;
  }
  .input-container:has(input:focus, textarea:focus) {
    border-bottom: 3px solid var(--clr-white);
    margin-bottom: 0;
  }
  .error {
    font-style: italic;
    font-size: var(--fs-little);
    line-height: var(--lh-h3);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: nowrap;
    min-width: 7.5rem;
  }
  .input-container:has(textarea) {
    align-items: flex-start;
  }
  .input-container:has(textarea) .error {
    margin-top: 1rem;
  }
  @media screen and (width >= 768px) {
    .btn {
      margin-inline: unset;
      margin-left: auto;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
  }
`;

export default ContactForm;
