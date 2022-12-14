import React from "react";
import { useForm } from "react-hook-form";
import CommonInputField from "../../../components/CommonInputField";
import CommonSelectField from "../../../components/CommonSelect";
import { fieldRules } from "../../../components/authHelper";
import NextButton from "../../../components/RSBSAButton";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { onSubmitRSBSAStep1 } from "../../../redux/dataSlice";

const Step1 = () => {
	const dispatch = useAppDispatch();
	const { userProfile } = useAppSelector((state) => state.authState);
	const { handleSubmit, control, setValue } = useForm();

	const onSubmiStep1 = (formData: any) => {
		dispatch(onSubmitRSBSAStep1(formData));
	};

	return (
		<form
			className=" w-[700px] flex flex-col gap-y-12 font-noto text-gray-700"
			autoComplete="off"
		>
			<div className="flex flex-col gap-y-5">
				<h4 className="text-base font-bold">Applicant Name</h4>
				<div className="w-full grid grid-cols-2 justify-center gap-8">
					<CommonInputField
						myControl={control}
						fieldType="text"
						fieldName="rsbsaFirstName"
						fieldLabel="First Name"
						fieldRules={fieldRules.requiredStringRule}
						defaultValue={userProfile.first_name}
						setFieldValue={setValue}
					/>
					<CommonInputField
						myControl={control}
						fieldType="text"
						fieldName="rsbsaLastName"
						fieldLabel="Last Name"
						fieldRules={fieldRules.requiredStringRule}
						defaultValue={userProfile.last_name}
						setFieldValue={setValue}
					/>
					<CommonInputField
						myControl={control}
						fieldType="text"
						fieldName="rsbsaExtension"
						fieldLabel="Extension"
						fieldRules=""
						defaultValue={userProfile.extension}
						setFieldValue={setValue}
					/>
					<CommonSelectField
						myControl={control}
						myOptions={[
							{ label: "Male", value: 0 },
							{ label: "Female", value: 1 },
						]}
						fieldName="rsbsaSex"
						fieldLabel="Sex"
						fieldRules={fieldRules.requiredRule}
						defaultValue={userProfile.sex}
						setFieldValue={setValue}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-y-5">
				<h4 className="text-base font-bold">Contact & Personal Info.</h4>
				<div className="w-full grid grid-cols-2 justify-center gap-8">
					<CommonInputField
						myControl={control}
						fieldType="text"
						fieldName="rsbsaMobile"
						fieldLabel="Mobile Number"
						fieldRules={fieldRules.requiredMobileNumberRule}
						defaultValue={userProfile.mobile}
						setFieldValue={setValue}
					/>
					<CommonInputField
						myControl={control}
						fieldType="text"
						fieldName="rsbsaEmail"
						fieldLabel="Email"
						fieldRules={fieldRules.requiredUniqueEmailRule}
						defaultValue={userProfile.email}
						setFieldValue={setValue}
					/>
					<CommonInputField
						myControl={control}
						fieldType="date"
						fieldName="rsbsaDateOfBirth"
						fieldLabel="Date of Birth"
						fieldRules={fieldRules.requiredRule}
						defaultValue={userProfile.date_of_birth}
						setFieldValue={setValue}
					/>
					<CommonInputField
						myControl={control}
						fieldType="text"
						fieldName="rsbsaPlaceOfBirth"
						fieldLabel="Place of Birth"
						fieldRules={fieldRules.requiredStringRule}
						defaultValue={userProfile.place_of_birth}
						setFieldValue={setValue}
					/>
					<CommonSelectField
						myControl={control}
						myOptions={[
							{ label: "Single", value: "Single" },
							{ label: "Married", value: "Married" },
							{ label: "Widowed", value: "Widowed" },
							{ label: "Separated", value: "Separated" },
						]}
						fieldName="rsbsaCivilStatus"
						fieldLabel="Civil Status"
						fieldRules={fieldRules.requiredRule}
						defaultValue={userProfile.civil_status}
						setFieldValue={setValue}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-y-5">
				<h4 className="text-base font-bold">Other Info.</h4>
				<div className="w-full grid grid-cols-2 justify-center gap-8">
					<CommonSelectField
						myControl={control}
						myOptions={[
							{ label: "Pre-School", value: "Pre-School" },
							{ label: "Elementary", value: "Elementary" },
							{
								label: "High School (Non K-12)",
								value: "High School (Non K-12)",
							},
							{
								label: "Junior High School (K-12)",
								value: "Junior High School (K-12)",
							},
							{
								label: "Senior High School (K-12)",
								value: "Senior High School (K-12)",
							},
							{ label: "College", value: "College" },
							{ label: "Vocational", value: "Vocational" },
							{ label: "Post-Graduate", value: "Post-Graduate" },
							{ label: "None", value: "None" },
						]}
						fieldName="rsbsaEducation"
						fieldLabel="Educational Attainment"
						fieldRules={fieldRules.requiredRule}
						defaultValue={userProfile.educational_attainment}
						setFieldValue={setValue}
					/>
					<CommonSelectField
						myControl={control}
						myOptions={[
							{ label: "Yes", value: 0 },
							{ label: "No", value: 1 },
						]}
						fieldName="rsbsaIsPWD"
						fieldLabel="Person with Disability?"
						fieldRules={fieldRules.requiredRule}
						defaultValue={userProfile.is_pwd}
						setFieldValue={setValue}
					/>
					<CommonSelectField
						myControl={control}
						myOptions={[
							{ label: "Yes", value: 0 },
							{ label: "No", value: 1 },
						]}
						fieldName="rsbsaIs4ps"
						fieldLabel="4ps Beneficiary?"
						fieldRules={fieldRules.requiredRule}
						defaultValue={userProfile.is_4ps_beneficiary}
						setFieldValue={setValue}
					/>
					<CommonSelectField
						myControl={control}
						myOptions={[
							{ label: "Yes", value: 0 },
							{ label: "No", value: 1 },
						]}
						fieldName="rsbsaIsIP"
						fieldLabel="Member of Indigenous Group?"
						fieldRules={fieldRules.requiredRule}
						defaultValue={userProfile.is_ip}
						setFieldValue={setValue}
					/>
				</div>
			</div>
			<div className="mt-10 mb-5 w-full flex justify-between">
				<div></div>
				<NextButton
					buttonText="Next"
					onClickButton={handleSubmit(onSubmiStep1)}
				/>
			</div>
		</form>
	);
};

export default Step1;
