import InputField from "./InputField";
import SelectField from "./SelectField";
import { educationOptions } from "../constants/form";
import Section from "./Section";
import { sendDetails } from "../api";
import { SchemaTypes, useForm } from "../utils";

const defaultForm = {
  email: "",
  fullName: "",
  age: "",
  education: "",
  institute: "",
  program: "",
  experience: "",
  canadaInstitute: "",
  canadaProgram: "",
  country: "",
  goals: "",
  scoresListening: "",
  scoresReading: "",
  scoresSpeaking: "",
  scoresWriting: "",
  isPaidTutionFees: null,
  paidTutionAmount: "",
  isGic: null,
  paidGicAmout: "",
};

const schema = {
  email: SchemaTypes.string(true),
  fullName: SchemaTypes.string(true),
  age: SchemaTypes.number(true),
  education: SchemaTypes.string(true),
  institute: SchemaTypes.string(true),
  program: SchemaTypes.string(true),
  experience: SchemaTypes.string(true),
  canadaInstitute: SchemaTypes.string(true),
  canadaProgram: SchemaTypes.string(true),
  country: SchemaTypes.string(true),
  goals: SchemaTypes.string(true),
  scoresListening: SchemaTypes.number(true),
  scoresReading: SchemaTypes.number(true),
  scoresSpeaking: SchemaTypes.number(true),
  scoresWriting: SchemaTypes.number(true),
  isPaidTutionFees: SchemaTypes.boolean(true),
  paidTutionAmount: SchemaTypes.number(true),
  isGic: SchemaTypes.boolean(true),
  paidGicAmout: SchemaTypes.number(true),
};

export default function Form() {
  const { handleSubmit, register, resetForm } = useForm(schema, defaultForm);

  const onSubmit = (value) => {
    sendDetails(value);
  };

  return (
    <div className="container">
      <Section>
        <div className="header">
          <h1> Customized SOP Generator </h1>
          Fill this questionnaire for the student. After submitting, you will
          receive an email at the email address that you have provided with a
          Statement of Purpose customized for you. You can use and modify that
          as per your needs.
          <br />
          <br />
          If you would like to get it edited, reviewed, or drafted by our
          experts, you can get in touch with us:
          <a href="https://effizient-immigration-inc.square.site/s/shop">
            https://effizient-immigration-inc.square.site/s/shop
          </a>
        </div>
      </Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <InputField
            size="medium"
            label="Email"
            type="email"
            {...register("email")}
          />
        </Section>
        <Section>
          <InputField
            size="medium"
            label="Full Name"
            type="text"
            {...register("fullName")}
          />
        </Section>

        <Section>
          <InputField
            size="small"
            label="Age"
            type="number"
            {...register("age")}
          />
        </Section>

        <Section>
          <SelectField
            label="Highest Level of Education"
            options={educationOptions}
            {...register("education")}
          />
        </Section>

        <Section>
          <InputField
            size="medium"
            label="What did you study?"
            type="text"
            {...register("program")}
          />
        </Section>

        <Section>
          <InputField
            size="medium"
            label="Institute where you completed your highest level of education?"
            type="text"
            {...register("institute")}
          />
        </Section>

        <Section>
          <InputField
            size="large"
            label="Do you have any relevant work experience?"
            description={
              <div className="input-description">
                <br />
                Write None if no work experience. Provide the following details
                if yes:
                <ol>
                  <li>Job Title</li>
                  <li>Company Name</li>
                  <li>Job duties</li>
                </ol>
                Sample Answer: I worked as a Sales Manager at Effizient
                Immigration Inc from Jan 2022 till Feb 2023. In this role, I
                managed sales operations, reaching out to leads, lead the
                outreach program, ensured meeting monthly targets.
              </div>
            }
            type="text"
            {...register("experience")}
          />
        </Section>

        <Section>
          <InputField
            size="medium"
            label="What institute did you get admitted to in Canada?"
            type="text"
            {...register("canadaInstitute")}
          />
        </Section>
        <Section>
          <InputField
            size="medium"
            label="What is your program of study in Canada?"
            type="text"
            {...register("canadaProgram")}
          />
        </Section>

        <Section>
          <InputField
            size="medium"
            label="Which country are you applying from?"
            type="text"
            {...register("country")}
          />
        </Section>

        <Section>
          <InputField
            size="large"
            label="What are your future goals?"
            type="text"
            {...register("goals")}
          />
        </Section>

        <Section>
          <InputField
            size="small"
            label="English Scores - Listening"
            type="number"
            {...register("scoresListening")}
          />
        </Section>

        <Section>
          <InputField
            size="medium"
            label="English Scores - Reading"
            type="number"
            {...register("scoresReading")}
          />
        </Section>

        <Section>
          <InputField
            size="medium"
            label="English Scores - Speaking"
            type="number"
            {...register("scoresSpeaking")}
          />
        </Section>
        <Section>
          <InputField
            size="medium"
            label="English Scores - Writing"
            type="number"
            {...register("scoresWriting")}
          />
        </Section>
        <Section>
          <InputField
            label="Did you pay your first year tuition?"
            type="radio"
            {...register("isPaidTutionFees")}
          />
        </Section>
        <Section>
          <InputField
            size="medium"
            label="How much tuition fee did you pay?"
            type="number"
            {...register("paidTutionAmount")}
          />
        </Section>

        <Section>
          <InputField
            label="Did you do a GIC?"
            type="radio"
            {...register("isGic")}
          />
        </Section>
        <Section>
          <InputField
            size="medium"
            label="How much did you pay towards GIC?"
            type="number"
            {...register("paidGicAmout")}
          />
        </Section>
        <div className="action-buttons">
          <input type="submit" className="submit-btn" />
          <button onClick={resetForm} className="clear-form">
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}
