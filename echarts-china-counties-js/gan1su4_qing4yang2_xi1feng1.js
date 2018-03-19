(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('西峰区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"621002","properties":{"name":"西峰区","cp":[107.651077,35.730652],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AA@AEACA@@AAAE@BA@ABA@@@A@@A@@@A@A@C@@@@A@@A@@CBED@@A@@@AA@A@A@A@@@AAA@@A@@BA@CBAB@@A@@@EAA@A@C@AB@@@B@@@B@@AAA@ACAAAA@@@@@@@AA@@@AA@BA@@BA@@@@BAB@@A@@@@@C@AB@@BB@@@B@@@@A@@@A@@@@@@@A@@@@@@@A@@@@@AB@@@B@BAB@@@B@@@BB@BDB@@B@D@B@@@@AB@@A@@@A@A@@@CF@@C@@BA@AB@@A@@@A@@BA@@B@@B@BDB@@BB@@B@@@@CB@@ADA@@@ABC@@BCB@BA@@@EAAAAAECACAA@@A@A@A@@@CBABC@A@@B@@AB@@@BCBABA@@B@@BDBD@D@BBB@B@B@@@BA@A@A@@B@@@@D@@@@BBB@B@@B@D@D@@BDBB@@B@@AB@@C@ABA@CB@@@B@@AB@@@B@BB@@@@@F@@@B@@B@@B@@@@B@@B@@@@@B@@@@BB@@@@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@A@@@@B@@@@@BA@@@@@@B@@@@A@@B@@@@@@@@@BA@@@@@@@@BA@@@@@@@@@@B@@@@A@@B@@@@@@@B@@A@@B@@@@@@@@@B@@A@@@@@@@@B@@A@@B@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@A@@@@@@AA@@@@@A@A@@@@@@@@@@@@A@AB@@@@@@@B@@A@@B@@A@@@@@@@A@@@@@@@A@@@AA@@EACAA@@@@@@@A@ABAB@@AB@@@B@@@@@@@@B@@@@@@BAB@@@@BB@@DBDB@@@@@@@BA@@@@@@@AA@@@@@B@@CB@@@@A@@BB@@@B@B@@@CBA@@B@B@@@@@BD@@@@@@@ABA@ABE@C@@BAB@BA@@@@@@@BBB@F@DB@@AB@BA@@B@B@D@@DBBBA@@B@@@B@B@@@B@BA@@BC@ABAB@@@@@DDD@@ABAB@BA@@@A@EA@@AAA@@@ABA@AB@@@B@B@B@BB@@@@B@@B@@@B@@BDD@BBB@@@B@@@@AA@@@B@@@@@B@@ABA@@@AB@@@B@B@D@@@@@@@@@@@@@@@@@B@@@@A@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@B@@@B@@@@@BAB@@@B@@@B@@AB@@ABA@@B@@AB@@@@AD@B@@AB@@@BA@A@ABC@A@AB@DAD@B@DBD@B@@B@@@BA@@@@JBB@BB@@B@@@BB@ABB@@A@ABA@@@A@@@@@CAA@@@AB@@@@@@AA@@A@A@@AA@@@@BA@@BAB@@C@CBA@A@AB@@@B@@B@BBB@@B@@@B@@@@@BA@@@AB@@AB@B@@@@CA@@@@@B@D@BAB@@@BBB@@AB@B@B@@BBBDB@@B@@@BAB@BAB@BA@@D@B@BAB@@CDAB@@A@C@C@A@@@@@CJ@BA@ADAB@BAB@BADAB@BA@C@A@@BA@@@@B@@BBB@D@B@BBB@@@@B@@@@@B@@AB@BAB@@@@@B@@@@@B@@@D@BBD@DAB@B@B@@@@BB@@@@@@@BBB@B@@A@@B@@@@A@@B@@AB@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@A@B@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@B@@@@@B@@@@@B@@@@@@@@@@@@@B@@@@A@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@BA@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@BB@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@B@@@@@B@@@@@@@B@@B@@@@B@@A@@B@@@@@B@@B@@B@@@@B@@@@B@@B@@@@@@D@DAB@@@DAD@@AB@B@D@BAB@B@@ABABAB@BABA@@@A@A@@B@@@BA@AB@@CFABA@AB@@@B@@@B@@AB@@@BAB@@@D@B@B@B@B@@@B@B@@AB@@AB@@@@@BA@@B@B@BA@@BAB@D@@@BA@@@@F@@@@ABA@@@@B@BAB@@ABAB@@AB@@B@@BAD@D@@@B@B@@BBBBB@@B@B@@@B@BCDCDEDBD@B@BBB@@@@@@@@B@D@@@B@@@B@@A@B@@B@@BD@B@@@B@@@BB@@D@@BB@B@@BB@BBD@@BB@@@BBB@@BB@@BD@@BD@@@BBB@@@BAB@B@@BD@@@B@@@BB@@F@B@@BBAB@@@BBB@B@@@@@F@@@@A@@@@@@@@BB@@B@B@@B@@@@B@B@@@@@@BB@@@B@@@B@@@@B@@@@BA@@@B@BB@@@@AB@B@@@@@@@BB@@@@@@@BB@@@@@B@@@@@BBB@@A@@@BB@@@@@BA@@@B@@BAB@BB@@B@B@@@@@@@B@B@@@@@BB@@@@@AB@@@@@B@@@B@@@@@@@B@@@@@@@@BB@@@@@@A@@B@@@@@B@@@@B@@@@B@@@@@@@@B@@B@@B@@B@B@B@B@BBB@B@@@B@F@@@AA@@D@@@B@@@B@@AB@@@B@@@@@@@@@@@B@@@@@@@@@B@@@@@B@@@@@@@@@@@@B@@@@@@@@B@@@@@B@@@@@@@B@@B@@@@B@@@@@@@B@@@@@B@@@BB@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@B@@@@B@@@@@@B@@@@B@@@@@@@@B@@@@B@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@B@@B@@@@@@@@@@@@@@@BB@@@@@BB@@@@@B@@A@@B@@B@@@@B@B@@@@@B@BB@@B@BD@@B@@@@@@@BB@@@@@@B@@@@@B@@BBBB@@@@@@DADC@@B@@@B@@@@@B@@@@B@D@@@@@@B@@@BA@AB@B@@AA@A@@@@A@@@@DB@@BA@@@@B@@@@B@@B@B@@A@@@@B@@B@@BB@@@@@@BBFBDBB@B@@@@@BB@@BBBBBB@@B@@@@AB@@@@ABAB@@@B@@@B@@@@@B@@@@@B@@BB@B@B@@API@@@@@@BABB@@B@DCB@B@A@@@@AB@@@B@@@@BB@@@BA@@@AB@@BBA@@B@@A@@@BB@@A@@@AB@@@B@@@B@@@@@B@@@@AB@@@@BB@@A@@B@@@@@B@B@@A@@@BB@@@@A@@@@@A@@@@B@@@@@@@@A@@B@@A@A@@@A@@A@@@@@BA@@B@@@@@@A@@@A@@@@@@@@B@@@@@B@@@AC@@@@@A@@B@@@B@@A@@A@@@@@@A@@DBB@@@@@@C@@BA@@B@@AA@@@@@@AB@BBBA@@@@@@AA@@@@B@B@@@@A@@@A@@BB@@@AAA@@@@B@@@DA@@B@@@AA@@BA@@@@@AA@BAB@@@@AA@@ABA@@@@A@@ABAB@@@AA@@@@B@@AA@A@@@@A@@B@@@B@BA@@AAB@@A@@@A@@A@@@@@BAB@@@B@@AAC@@B@@@@@@A@@@@@A@@@A@@@@@ABBB@@AA@BA@@@@@@@@CC@@@@BA@@BB@@B@@@@A@@@@@@@@D@B@B@@@@@@AB@@@@@@ABC@A@@@AAA@@B@@AB@@@@AB@B@@ADC@A@AA@@@ABA@@A@@B@@@B@B@D@@A@@@@@@@AB@B@DC@@@@B@@BBBBB@@@@B@@@BA@@@ABA@@B@@@@@B@BD@BB@B@@@BA@A@@BAB@@ABC@ADADC@@B@@@@B@@@@@B@@@@BA@AD@@A@@vDF@B@B@B@@A@@B@BB@@B@D@D@@@@BB@@@B@@@B@B@@A@@@C@A@@BA@@@A@@@A@A@A@@B@B@B@@@B@B@B@B@@@@B@@@BB@@@@A@@@C@@@@D@@@BA@@@@BAB@@@B@@AA@@@@@@@BA@@AA@AB@@C@@DADAB@B@B@B@@@B@@@@@BA@@@@B@@@B@@AB@BAB@@@B@BB@@B@@@BB@B@@B@B@@@@A@@@AB@@@@A@AAAAC@@AA@@BA@A@@@@B@DB@@BBD@B@@BB@@BB@@@BAFCDCBA@@BAB@DAB@BA@AA@C@@@@@@@@AB@@ABA@@B@@AB@BABABA@@B@@B@BBB@BB@B@B@D@@@@@B@@AB@@@@A@@@ACAAA@@BA@@@@@@BBB@BB@@@A@@@@@A@@@AB@@A@@@@AAA@@A@A@@BA@AB@@A@@B@BDB@@@BBB@@AB@AA@@@@B@@@BE@@@@BA@@@A@@@AB@@@D@@@@@@@@@AA@@@@@C@@AA@@@A@@@@@@B@@@B@BB@A@@AA@@@@@@B@@@@@B@B@B@@@@@BB@B@@@@@@B@@@@A@@@A@A@A@@@@@@B@DBB@@@@AB@@A@@@AB@@A@@@@@@@A@@B@AAB@@@BA@A@@BBBBDD@@D@B@@@@CBA@@@@@A@@DB@@B@F@@@BABC@A@C@ADC@CBAA@@AA@@A@@B@FBB@BBB@@@B@@@@@@C@@BA@A@AC@A@ABA@@@AA@@AABCA@@A@@@A@A@@AA@@@@@A@@ACA@@AA@@A@@@A@@@@@@@A@@@C@@AA@A@@@ABA@C@A@E@@AA@@@ABA@@B@@@BC@@A@@A@@BG@C@@GAA@@B@B@@C@@@@@A@C@BKBA@@A@EAG@@@A@@BA@@@EC@@@ABA@A@A@@@ABA@@BE@A@@ACB@@A@@AC@@@@@A@@@ABA@@BA@@@@AA@A@A@AAABA@@@A@@@A@@@A@@BCBA@@@CBA@@AC@ABA@@BA@@@A@@BA@AB@@AAABAA@A@@@A@@@A@@@A@@@@@A@@@@BA@@@B@@@@@@@B@@@@@@@@B@@@@@@@@@B@@@@@@@@@@A@A@@@@@@@@@@@AB@@@@@@@@@@AAA@A@@@@@A@@@@@@@A@AA@@@@@@@@BA@A@@@@@@A@@@@@@@@@A@@B@@@@@@@@@@@A@@@@@@@@@@A@@A@@@@AB@@@B@@@@@@@@A@@@A@A@@@C@@@A@@@@@@A@@@A@@AA@@@@@A@@@@A@@@@@A@@B@@A@@@@@A@@@@@@@@@BA@@B@@A@@@@A@@AAA@@A@@@@AB@@@@@B@@@@@@@@@@@@AB@@@@@@@B@@@@A@@@@A@@@@@@@@A@@@A@A@A@A@@@A@@B@@@@@@@B@@@@@@A@@@@@@A@AAEB@@A@@BABA@C@@@A@@A@A@BA@A@@@CA@@CBA@@@AE@@@@A@@@A@@@@B@B@BAAA@A@AB@@A@@A@@@@AA@@AB@@@@@AAAAA@AAAA@@@E@@@@@@@AA@@A@A@@@A@CAC@CAAAA@@@@@@@E@@@@@@A@@@@C@AA@BA@@@AAAA@@A@A@@@@@A@AA@AA@CB@A@@@@BA@@@@A@@@@A@@@@AA@@A@A@A@C@A@AAA@CAC@@@AB@@A@@AA@ABA@@@A@@ACA@@A@A@@@@@@@@AA@@@A@@AA@AAA@@@A@@C@@@@A@AB@@@@A@@@@@C@A@C@@@A@AA@@A@@@@AA@AA@@A@@@@@@A@@A@A@@@@AA@A@@A@@@@A@@@@A@@I@@@A@@A@@AA@@AA@@AA@@A@@A@@@AA@@AAAAAAC@A@A@@@AAA@AEC@A@@D@@@AA@@@@@@@@@AA@@A@@BBB@@@@@@@@A@@A@A@@A@@@@BAB@BA@@@A@@AAAA@A@A@@@A@@A@ABA@CA@@@@@A@@A@@@@BAB@BA@@@@B@BCD@@AA@BABB@CD@@@@AAAAAAA@@B@B@@@@@@FFDB@@@BCDABABAB@@@BB@@@CBC@@@AAA@@@AB@@@@EA@B@@@BDBB@@@@@A@A@@BA@@@@B@@CBCD@@@@@A@@@C@@@ACA@@@@@ABA@ABC@ABABABE@ABA@@@A@@@CBE@A@ABABA@@@A@@@A@@BA@@@@@ABA@A@@@A@@B@@AB@@A@A@@B@BA@@@@BA@@@AB@@@@@@@@A@@@AB@@A@@B@BA@@B@@@@@AA@@@ABA@A@@@A@A@@@@@A@@B@@A@@@@AA@@BA@@@A@@A@@@@@@@@A@A@@@@A@@@@ABA@@AA@AA@@@@A@A@@@@AAA@@@BA@C@@@A@@@A@@@A@@@@AA@@@AAA@A@@@@A@AA@@@@@@@A@@@AA@@AA@@A@@@@@@@A@@@@@@CCAC@@@@AA@@A@@@@@@A@@B@@@@A@@@@C@@@BB@B@@BBBB@B@@@B@@BB@@@@ABEB@@@AA@@@@@AA@AA@@A@A@A@@@A@A@@@@@A@@B@@@@AB@@@@A@@@@@A@@@A@@A@@AB@@@@AA@@A@AB@@AA@@@@@@A@@@AACAA@@@A@@@@AA@A@AAA@@@A@@@@CA@AC@@@AAACAA@A"],"encodeOffsets":[[110271,36293]]}}],"UTF8Encoding":true});}));