/* eslint-disable @next/next/no-img-element */
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Text, WrapItem } from "@chakra-ui/layout";
import { Transaction } from "../store";

type TransactionItemProps = {
  transactionDetails: Transaction;
  onDeleteTransaction: (id: string) => void;
};

export const TransactionItem = ({
  transactionDetails,
  onDeleteTransaction,
}: TransactionItemProps) => {
  const { id, title, amount, type } = transactionDetails;

  const handleDeleteTransaction = () => {
    onDeleteTransaction(id);
  };

  return (
    <WrapItem
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px"
      borderRight="1px"
      borderLeft="1px"
      borderColor="gray.400"
      w="full"
      p={["3", "6"]}
      _last={{
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
      }}
    >
      <Text color="gray.800" fontSize="sm" fontWeight="medium" width="30%">
        {title}
      </Text>
      <Text color="gray.800" fontSize="sm" fontWeight="medium" width="30%">
        R$ {amount}
      </Text>
      <Text color="gray.800" fontSize="sm" fontWeight="medium" width="30%">
        {type}
      </Text>
      <Flex w="10%">
        <Button
          variant="unstyled"
          type="button"
          onClick={handleDeleteTransaction}
        >
          <Image
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            width="6"
            height="6"
            alignSelf="center"
            border="none"
            outline="none"
            mr={["0", "6"]}
          />
        </Button>
      </Flex>
    </WrapItem>
  );
};
