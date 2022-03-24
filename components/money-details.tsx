import { Image } from "@chakra-ui/image";
import { Flex, Text, VStack } from "@chakra-ui/layout";

/* eslint-disable @next/next/no-img-element */
type MoneyDetails = {
  balanceAmount: number;
  incomeAmount: number;
  expenseAmount: number;
};

export const MoneyDetails = ({
  balanceAmount,
  expenseAmount,
  incomeAmount,
}: MoneyDetails) => (
  <Flex
    direction={["column", "row"]}
    justifyContent={["center", "space-between"]}
    alignItems="center"
    w="full"
    my="8"
  >
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      bgColor="green.100"
      w={["full", "30%"]}
      borderRadius="2xl"
      border="1px"
      borderColor="green.400"
      mb="4"
    >
      <Image
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        w="16"
        h="16"
        m="6"
      />
      <VStack alignItems="start">
        <Text fontSize="md" color="gray.800">
          Your Balance
        </Text>
        <Text fontSize="2xl">R$ {balanceAmount}</Text>
      </VStack>
    </Flex>
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      bgColor="blue.100"
      w={["full", "30%"]}
      borderRadius="2xl"
      border="1px"
      borderColor="blue.400"
      mb="4"
    >
      <Image
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
        w="16"
        h="16"
        m="6"
      />
      <VStack alignItems="start">
        <Text fontSize="md" color="gray.800">
          Your Income
        </Text>
        <Text fontSize="2xl">R$ {incomeAmount}</Text>
      </VStack>
    </Flex>
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      bgColor="purple.100"
      w={["full", "30%"]}
      borderRadius="2xl"
      border="1px"
      borderColor="purple.400"
      mb={["0", "4"]}
    >
      <Image
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
        w="16"
        h="16"
        m="6"
      />
      <VStack alignItems="start">
        <Text fontSize="md" color="gray.800">
          Your Expenses
        </Text>
        <Text fontSize="2xl">R$ {expenseAmount}</Text>
      </VStack>
    </Flex>
  </Flex>
);
