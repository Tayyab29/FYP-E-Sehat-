import React from "react"
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"

export const Dropdown = () => {
  let [city, setCity] = React.useState("")
  return (
    <VStack alignItems="center" fontWeight ="bold">
      <Select
        h = {12}
        fontSize="md"
        selectedValue={city}
        minWidth="280"
        accessibilityLabel="Choose City"
        placeholder="Choose City"
        _selectedItem={{
          bg: "teal.1000",
          endIcon: <CheckIcon size="6" />,
        }}
        mt={1}
        mb = {3}
        onValueChange={(itemValue) => setCity(itemValue)}
      >
        <Select.Item label="Rawalpindi" value="rw" />
        <Select.Item label="Islamabad" value="is" />
        <Select.Item label="Karachi" value="ka" />
        <Select.Item label="Lahore" value="la" />
        <Select.Item label="Peshawar" value="pe" />
        <Select.Item label="Faisalabad" value="fa" />
        <Select.Item label="Quetta" value="qu" />
        <Select.Item label="Multan" value="mu" />
        <Select.Item label="Bahawalpur" value="ba" />
      </Select>
    </VStack>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center >
        <Dropdown />
      </Center>
    </NativeBaseProvider>
  )
}
