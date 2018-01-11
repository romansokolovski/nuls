package io.nuls.ledger.service.intf;

import io.nuls.core.chain.entity.Na;
import io.nuls.core.chain.entity.NulsDigestData;
import io.nuls.core.chain.entity.Transaction;
import io.nuls.core.exception.NulsException;
import io.nuls.core.validate.ValidateResult;
import io.nuls.ledger.entity.Balance;
import io.nuls.ledger.entity.tx.LockNulsTransaction;
import io.nuls.ledger.entity.tx.TransferTransaction;

import java.util.List;

/**
 * @author Niels
 * @date 2017/11/9
 */
public interface LedgerService {

    /**
     * @param tx
     * @return
     * @throws NulsException
     */
    ValidateResult verifyTx(Transaction tx);

    /**
     * @param hash
     * @return
     */
    Transaction getTx(NulsDigestData hash);

    /**
     * @param hash
     * @return
     */
    Transaction getLocalTx(NulsDigestData hash);

    /**
     * @param address
     * @return
     */
    Balance getBalance(String address);


    /**
     * @param address
     * @param password
     * @param amount
     * @param unlockTime
     * @param unlockHeight
     * @return
     */
    LockNulsTransaction lock(String address, String password, Na amount, long unlockTime, long unlockHeight);

    /**
     * @param address
     * @param password
     * @param toAddress
     * @param amount
     * @param remark
     * @return
     */
    TransferTransaction transfer(String address, String password, String toAddress, Na amount, String remark);

    /**
     * @param txList
     * @return
     */
    boolean saveTxList(long height,String blockHash,List<Transaction> txList);

    boolean saveTxList(long height, long blockHash, List<Transaction> txList);

    /**
     * @param address
     * @param txType
     * @param beginTime
     * @param endTime
     * @return
     */
    List<Transaction> getListByAddress(String address, int txType, long beginTime, long endTime);


    /**
     * @param txHashList
     * @return
     */
    List<Transaction> getListByHashs(List<NulsDigestData> txHashList);
    List<Transaction> getListByHeight(long startHeight,long endHeight);
    List<Transaction> getListByHeight(long height);

    void rollbackTx(Transaction tx) throws NulsException;

    void commitTx(Transaction tx) throws NulsException;

    void approvalTx(Transaction tx) throws NulsException;
}
