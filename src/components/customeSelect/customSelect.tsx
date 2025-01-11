import { useState, useEffect, FC } from "react";
import Select, { SingleValue, MultiValue, StylesConfig } from "react-select";
import PropTypes from "prop-types";

interface OptionType {
    id: number;
    name: string;
}

interface CustomSelectMenuProps {
    options?: OptionType[];
    selected?: boolean;
    name?: string;
    sx?: object;
    isMultiChoices?: boolean;
    label?: string;
    isDisabled?: boolean;
    placeholder?: string;
    onChange?: (
        value: SingleValue<OptionType> | MultiValue<OptionType>,
        name?: string
    ) => void;
    defaultData?: number | undefined | null;
    customstyle?: object;
    loading?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    error?: string;
    width?: string;
    higth?: string;
    isGray?: boolean;
}

const CustomSelectMenu: FC<CustomSelectMenuProps> = ({
    options = [],
    name,
    isMultiChoices = false,
    label,
    isDisabled,
    placeholder,
    onChange,
    customstyle,
    defaultData,
    loading,
    error,
    width,
    isGray = false,
    higth,
}) => {
    const [selectedValue, setSelectedValue] = useState<any>(null);

    useEffect(() => {
        if (defaultData !== undefined) {
            const updatedSelectedObject =
                options.length > 0 &&
                options?.find((option) => option.id === defaultData);
            setSelectedValue(updatedSelectedObject || null);
        }
    }, [defaultData, options]);

    const handleOnChange = (
        selectedOption: SingleValue<OptionType> | MultiValue<OptionType>
    ) => {
        setSelectedValue(selectedOption);
        if (onChange) onChange(selectedOption, name);
    };

    const customStyles: StylesConfig<OptionType, boolean> = {
        control: (provided, state) => ({
            ...provided,
            paddingLeft: "6px",
            height: "48px",
            borderRadius: "0.5rem",
            borderColor: error
                ? "red"
                : state.isFocused
                    ? "rgba(94, 94, 94,0.4)"
                    : isGray ? "rgba(94, 94, 94,0.4)"
                        : '#018AAF',
            borderWidth: error ? "1px" : "1px",
            boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.05)',
            "&:hover": {
                borderColor: error ? "red" : "blue",
            },
        }),
        menu: (provided) => ({
            ...provided,
            color: "#333",
        }),
        container: (provided) => ({
            ...provided,
            borderRadius: "8px",
            ...customstyle,
        }),
        menuPortal: (provided) => ({
            ...provided,
        }),
    };
    return (
        <div
            className={`mt-1`}
            style={{
                width: `${width}`,
                height: `${higth}`,
            }}
        >
            {label ? (
                <h1 className={`text-[16px] font-[400] text-[#26203B] mb-[8px]`}>
                    {label}
                </h1>
            ) : null}

            <Select
                placeholder={placeholder}
                isDisabled={!!isDisabled}
                isSearchable={true}
                isClearable={false}
                isLoading={loading}
                isMulti={isMultiChoices}
                defaultValue={selectedValue}
                name={name}
                value={selectedValue}
                onChange={handleOnChange}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id.toString()}
                options={
                    options?.length > 0
                        ? options?.map((item) => ({ ...item, name: item.name }))
                        : []
                }
                styles={customStyles}
            />
            {error ? (
                <div className="ps-2 text-red-500">{error}</div>
            ) : (
                <div className="ps-2 opacity-0 disabled">" "</div>
            )}
        </div>
    );
};

CustomSelectMenu.propTypes = {
    options: PropTypes.array.isRequired,
    selected: PropTypes.bool,
    name: PropTypes.string.isRequired,
    sx: PropTypes.object,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    defaultData: PropTypes.number,
    loading: PropTypes.bool,
    helperText: PropTypes.string,
    fullWidth: PropTypes.bool,
};

export default CustomSelectMenu;
