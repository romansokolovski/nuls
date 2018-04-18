/*
 *
 * MIT License
 *
 * Copyright (c) 2017-2018 nuls.io
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

package io.nuls.account.event;

import io.nuls.account.constant.EventType;
import io.nuls.account.entity.tx.AliasTransaction;
import io.nuls.core.constant.ErrorCode;
import io.nuls.protocol.event.base.NoticeData;
import io.nuls.core.exception.NulsException;
import io.nuls.protocol.utils.io.NulsByteBuffer;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Niels
 * @date 2018/3/8
 */
public class SetAliasNotice extends AccountNotice<AliasTransaction> {

    public SetAliasNotice() {
        super(EventType.SET_ALIAS_NOTICE);
    }

    @Override
    protected AliasTransaction parseEventBody(NulsByteBuffer byteBuffer) throws NulsException {
        return null;
    }

    @Override
    public NoticeData getNotice() {
        NoticeData data = new NoticeData();
        Map<String, String> map = new HashMap<>();
        map.put("address", this.getEventBody().getTxData().getAddress());
        map.put("alias", this.getEventBody().getTxData().getAlias());
        data.setData(map);
        data.setMessage(ErrorCode.SET_AN_ALIAS);
        return data;
    }
}
