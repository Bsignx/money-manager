import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent } from "react";
import { v4 } from "uuid";

import { TRANSACTION_TYPE_OPTIONS } from "../constants";
import { useMoneyManagerStore } from "../store";
import { MoneyDetails } from "./money-details";
import { TransactionItem } from "./transaction-item";

export const MoneyManagerTemplate = () => {
  const {
    transactionsList,
    amountInput,
    optionId,
    titleInput,
    addTransaction,
    deleteTransaction,
    updateOptionId,
    updateAmountInput,
    updateTitleInput,
    getExpenseTotal,
    getBalance,
    getIncomeTotal,
  } = useMoneyManagerStore();

  const handleDeleteTransaction = (id: string) => {
    deleteTransaction(id);
  };

  const handleAddTransaction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(amountInput);
    const typeOption = TRANSACTION_TYPE_OPTIONS.find(
      (eachTransaction) => eachTransaction.optionId === optionId
    );

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: typeOption!.displayText,
    };

    addTransaction(newTransaction, TRANSACTION_TYPE_OPTIONS[0].optionId);
  };

  const handleChangeOptionId = (event: ChangeEvent<HTMLSelectElement>) => {
    updateOptionId(event.target.value);
  };

  const handleChangeAmountInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateAmountInput(event.target.value);
  };

  const handleChangeTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateTitleInput(event.target.value);
  };

  const balanceAmount = getBalance();
  const incomeAmount = getIncomeTotal();
  const expensesAmount = getExpenseTotal();

  console.log(transactionsList);
  return (
    <Container maxW="container.lg" as="main">
      <Flex justifyContent="center" minH="100vh">
        <Box w="100%">
          <Flex
            direction="column"
            justifyContent="center"
            alignItems={["center", "flex-start"]}
            textAlign={["center", "center", "left"]}
            backgroundImage="url('https://res.cloudinary.com/do4qwwms8/image/upload/v1626263091/Money%20Manager/money-manager-header_rxlcrn.png')"
            backgroundSize="cover"
            h="40"
            borderRadius="2xl"
            mt="16"
            p={["0", "0", "12"]}
          >
            <Heading color="primary.main" fontSize="3xl" fontWeight={500}>
              Hi, Bruno
            </Heading>
            <Text color="primary.main" className="header-content" mt={2}>
              Welcome back to your{" "}
              <Text as="span" color="blue.600" fontWeight={500}>
                Money Manager
              </Text>
            </Text>
          </Flex>

          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expenseAmount={expensesAmount}
          />

          <Flex
            direction={["column", "row"]}
            justifyContent="space-between"
            w="full"
            mb="6"
          >
            <form
              className="transaction-form"
              style={{ width: "100%" }}
              onSubmit={handleAddTransaction}
            >
              <Flex
                direction="column"
                justifyContent="space-around"
                alignItems="flex-start"
                h="sm"
                w={["full", "90%"]}
                border="1px"
                borderRadius="2xl"
                borderColor="gray.400"
                px={["6", "12"]}
                pt="6"
                pb="8"
              >
                <Heading color="gray.800" fontSize="lg" fontWeight="medium">
                  Add Transaction
                </Heading>

                <FormControl>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <Input
                    id="title"
                    type="text"
                    value={titleInput}
                    onChange={handleChangeTitleInput}
                    placeholder="Title"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="amount">Amount</FormLabel>
                  <Input
                    id="amount"
                    type="text"
                    value={amountInput}
                    onChange={handleChangeAmountInput}
                    placeholder="Amount"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="type">Type</FormLabel>
                  <Select
                    id="type"
                    placeholder="Select type"
                    value={optionId}
                    onChange={handleChangeOptionId}
                  >
                    {TRANSACTION_TYPE_OPTIONS.map((eachOption) => (
                      <option
                        key={eachOption.optionId}
                        value={eachOption.optionId}
                      >
                        {eachOption.displayText.toUpperCase()}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <Button type="submit" colorScheme="blue" isFullWidth mt="4">
                  Add
                </Button>
              </Flex>
            </form>
            <Box
              w="full"
              minH="sm"
              border="1px"
              borderColor="gray.400"
              borderRadius="2xl"
              p="6"
              mt={["8", "0"]}
            >
              <Heading
                color="gray.800"
                fontSize="lg"
                fontWeight="medium"
                mb="2"
              >
                History
              </Heading>
              <Box h="full">
                <Wrap spacing={0}>
                  <WrapItem
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    h="12"
                    border="1px"
                    borderColor="gray.400"
                    borderTopLeftRadius="12px"
                    borderTopRightRadius="12px"
                    px={["3", "6"]}
                    w="full"
                  >
                    <Text
                      color="gray.800"
                      fontSize="sm"
                      fontWeight="medium"
                      width="30%"
                    >
                      Title
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize="sm"
                      fontWeight="medium"
                      width="30%"
                    >
                      Amount
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize="sm"
                      fontWeight="medium"
                      width="30%"
                    >
                      Type
                    </Text>
                  </WrapItem>
                  {transactionsList.map((eachTransaction) => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      onDeleteTransaction={handleDeleteTransaction}
                    />
                  ))}
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};
