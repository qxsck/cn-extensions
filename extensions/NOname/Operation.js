((Scratch) => {
    'use strict';

    const { Cast, ArgumentType, BlockType } = Scratch;

    Scratch.translate.setup({
        "zh": {
            "OPERATION_EXT_NAME": "运算",
            "OPERATION_SETTING": "设置",
            "OPERATION.SHOW": "显示",
            "OPERATION.HIDE": "隐藏",
            "OPERATION.EXPAND": "展开",
            "OPERATION.COLLAPSE": "收起",
            "OPERATION.RARE_BLOCK": "不常用块",
            "OPERATION.EXPAND_MENU": "展开下拉框",
            "OPERATION.MATH_LABEL": "数学",
            "OPERATION.BOOLEAN_LABEL": "布尔值",
            "OPERATION.STRING_LABEL": "字符",
            "OPERATION.SPLIT_LABEL": "分割",
            "OPERATION.GRAPH_LABEL": "图形",
            "OPERATION.BASE_LABEL": "进制",
            "OPERATION.CONSTANT_LABEL": "常量",
            "OPERATION.SHOW_MATH_BLOCK": "显示运算块",
            "OPERATION.HIDE_MATH_BLOCK": "隐藏运算块",
            "OPERATION.SHOW_BOOLEAN_BLOCK": "显示布尔块",
            "OPERATION.HIDE_BOOLEAN_BLOCK": "隐藏布尔块",
            "OPERATION.SHOW_STRING_BLOCK": "显示字符串块",
            "OPERATION.HIDE_STRING_BLOCK": "隐藏字符串块",
            "OPERATION.SHOW_RARD": "显示不常用块",
            "OPERATION.HIDE_RARD": "隐藏不常用块",
            "OPERATION.SHOW_GRAPH_BLOCK": "显示图形块",
            "OPERATION.HIDE_GRAPH_BLOCK": "隐藏图形块",
            "OPERATION.SHOW_BASE_BLOCK": "显示进制块",
            "OPERATION.HIDE_BASE_BLOCK": "隐藏进制块",
            "OPERATION.CONSTRAIN": "限制 [NUM] 在 [LOW] 与 [HIGH] 之间",
            "OPERATION.LOOP_NUMBER": "让 [NUM] 在 [START] 到 [END] 中循环",
            "OPERATION.ROUND": "四舍五入 [NUM1] 到小数点后 [NUM2] 位",
            "OPERATION.MAP_OFF": "映射 [NUM] 从 [START1] ~ [END1] 到 [START2] ~ [END2]",
            "OPERATION.BASE": "把 [INTO1] 进制的 [NUM] 转换为 [INTO2] 进制",
            "OPERATION.TO_BIN": "[NUM]₁₀ → 二进制",
            "OPERATION.TO_DEC": "[NUM]₂ → 十进制",
            "OPERATION.IS_BASE": "[NUM] 是合法的 [BASE] 进制？",
            "OPERATION.FACTORIAL": "[NUM] 的阶乘",
            "OPERATION.CALCULATE": "计算 [TEXT]",
            "OPERATION.FIND_PARTITION": "把 [RANGE_START] 到 [RANGE_END] 等分为 [NUM_PARTITIONS] 个部分并获取 [VALUE] 的分区",
            "OPERATION.BOOLEAN_TO_NUMBER": "转换 [BOOLEAN] 为二进制数字",
            "OPERATION.NUMBER_NOT": "二进制取反 [NUM]",
            "OPERATION.PERCENT_OF": "[NUM2] 的 [NUM1] %",
            "OPERATION.IS_TRUE": "[OPERAND] 为真？",
            "OPERATION.CHECK_TYPE": "[INPUT] 是 [MODE] ？",
            "OPERATION.IS_BETWEEN": "[NUM] 在 [START] 到 [END] 之间？",
            "OPERATION.TEXT": "文本 [STRING]",
            "OPERATION.TEST": "如果 [BOOLEAN] 那么 [STRING1] 否则 [STRING2]",
            "OPERATION.REPEAT": "重复 [STRING] [NUMBER] 次",
            "OPERATION.TRIM": "消除 [STRING] 两侧的空白文本",
            "OPERATION.INTERCEPT": "截取 [STRING] 的 [START] 到 [END]",
            "OPERATION.REMOVE": "删除 [STRING] 的 [START] 到 [END]",
            "OPERATION.INSERT": "在 [STRING] 的第 [INDEX] 字符前插入 [INSERT_STR]",
            "OPERATION.REPLACE": "替换 [STRING1] 中的 [STRING2] 为 [STRING3]",
            "OPERATION.REPLACE_INDEX": "替换 [STRING] 中的第 [START] 到 [END] 为 [REPLACEMENT]",
            "OPERATION.SPLIT": "按 [SYMBOL] 分割 [STRING] 获取第 [NUM] 项",
            "OPERATION.SPLIT_REMOVE": "按 [SYMBOL] 分割 [STRING] 删除第 [NUM] 项",
            "OPERATION.SPLIT_INSERT": "按 [SYMBOL] 分割 [STRING] 在第 [INDEX] 项前插入 [INSERT_STR]",
            "OPERATION.SPLIT_REPLACE": "按 [SYMBOL] 分割 [STRING] 把第 [INDEX] 项替换为 [REPLACE_STR]",
            "OPERATION.SPLIT_ANALYSIS": "按 [SYMBOL] 分割 [STRING] 获取 [MODE]",
            "OPERATION.SPLIT_SHUFFLE": "按 [SYMBOL] 分割 [STRING] 打乱所有项",
            "OPERATION.TOGGLE_CASE": "[STRING1] 在 [STRING2] 中 [MODE]",
            "OPERATION.CONVERT": "转换 [STRING] 为 [MODE]",
            "OPERATION.JOIN": "连接文字 [STRING]",
            "OPERATION.GET_JOIN": "连接的文本",
            "OPERATION.GET_TO_UNICODE": "[STRING] 的 Unicode",
            "OPERATION.UNICODE_TO_STRING": "Unicode 为 [STRING] 的字符",
            "OPERATION.SHUFFLE": "打乱 [STRING]",
            "OPERATION.OVERWRITE": "使用 [OTHER] 覆盖 [ORIGINAL] ，方向：[DIRECTION]",
            "OPERATION.PAD_STRING": "如果 [ORIGINAL_STR] 的长度小于 [REQUIRED_LENGTH] ，用 [CHAR_TO_ADD] 在 [POSITION] 补全",
            "OPERATION.CALCULATE_LINE_LENGTH": "([X1],[Y1]) 到 ([X2],[Y2]) 的长度",
            "OPERATION.CALCULATE_LINE_DIRECTION": "([X1],[Y1]) 到 ([X2],[Y2]) 的角度",
            "OPERATION.CALCULATE_INTERSECTION": "计算交点 ([X1],[Y1]) 到 ([X2],[Y2]) 与 ([X3],[Y3]) 到 ([X4],[Y4])",
            "OPERATION.TRIANGLE": "三角形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) 的 [MODE]",
            "OPERATION.TRIANGLE_AREA": "三角形 [S1] [S2] [S3] 的面积",
            "OPERATION.RECTANGLE": "四边形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) ([X4],[Y4]) 的 [MODE]",
            "OPERATION.GRAPH": "多边形 [GRAPH] 的 [MODE]",
            "OPERATION.CIRCLE": "[UNITS] 为 [LENGTH] 的圆的 [MODE]",
            "OPERATION.IS_ANGLE_IN_RANGE": "角 [ANGLE1] 在角 [ANGLE2] 到角 [ANGLE3] 的 [MODE] 之间？",
            "OPERATION.CALCULATE_ANGLE_DIFFERENCE": "角度 [ANGLE1] 到 [ANGLE2] 的 [MODE]",
            "OPERATION.GET_CONSTANT": "常量 [OPTION]",
            "OPERATION.TRUE": "真",
            "OPERATION.FALSE": "假",
            "OPERATION.RANDOM": "随机",
            "OPERATION.TYPE_NUMBER": "数字",
            "OPERATION.TYPE_POSITIVE_NUMBER": "正数",
            "OPERATION.TYPE_NEGATIVE_NUMBER": "负数",
            "OPERATION.TYPE_EVEN_NUMBER": "偶数",
            "OPERATION.TYPE_ODD_NUMBER": "奇数",
            "OPERATION.TYPE_INTEGER_NUMBER": "整数",
            "OPERATION.TYPE_DECIMAL_NUMBER": "小数",
            "OPERATION.TYPE_PRIME_NUMBER": "质数",
            "OPERATION.TYPE_COMPOSITE_NUMBER": "合数",
            "OPERATION.TYPE_TEXT": "文字",
            "OPERATION.TYPE_BOOLEAN": "布尔值",
            "OPERATION.NAND": "与非",
            "OPERATION.NOR": "或非",
            "OPERATION.XOR": "异或",
            "OPERATION.XNOR": "同或",
            "OPERATION.FIRST_OCCURRENCE": "第一次出现的位置",
            "OPERATION.LAST_OCCURRENCE": "最后出现的位置",
            "OPERATION.NUMBER_OF": "出现的次数",
            "OPERATION.UPPERCASE": "大写",
            "OPERATION.LOWERCASE": "小写",
            "OPERATION.CAPITALIZE": "首字母大写",
            "OPERATION.REVERSE": "倒序",
            "OPERATION.FRONT": "前面",
            "OPERATION.BACK": "后面",
            "OPERATION.MAX": "最大值",
            "OPERATION.MIN": "最小值",
            "OPERATION.MEAN": "平均值",
            "OPERATION.SUM": "总和",
            "OPERATION.AREA": "面积",
            "OPERATION.CIRCUMFERENCE": "周长",
            "OPERATION.RADIUS": "半径",
            "OPERATION.DIAMETER": "直径",
            "OPERATION.INTERIOR_ANGLE": "内角",
            "OPERATION.EXTERIOR_ANGLE": "外角",
            "OPERATION.CLOCKWISE": "顺时针",
            "OPERATION.COUNTER_CLOCKWISE": "逆时针",
            "OPERATION.ARG_APPLE": "苹果",
            "OPERATION.ARG_BANANA": "香蕉",
            "OPERATION.ARG_PEACH": "桃子",
            "OPERATION.ARG_MANGO": "芒果"
        },
        "zh-tw": {
            "OPERATION_EXT_NAME": "運算",
            "OPERATION_SETTING": "設定",
            "OPERATION.SHOW": "顯示",
            "OPERATION.HIDE": "隱藏",
            "OPERATION.EXPAND": "展開",
            "OPERATION.COLLAPSE": "收起",
            "OPERATION.RARE_BLOCK": "不常用積木",
            "OPERATION.EXPAND_MENU": "展開下拉選單",
            "OPERATION.MATH_LABEL": "數學",
            "OPERATION.BOOLEAN_LABEL": "布林",
            "OPERATION.STRING_LABEL": "字串",
            "OPERATION.SPLIT_LABEL": "分割",
            "OPERATION.GRAPH_LABEL": "圖形",
            "OPERATION.BASE_LABEL": "進制",
            "OPERATION.CONSTANT_LABEL": "常數",
            "OPERATION.SHOW_MATH_BLOCK": "顯示數學積木",
            "OPERATION.HIDE_MATH_BLOCK": "隱藏數學積木",
            "OPERATION.SHOW_BOOLEAN_BLOCK": "顯示布林積木",
            "OPERATION.HIDE_BOOLEAN_BLOCK": "隱藏布林積木",
            "OPERATION.SHOW_STRING_BLOCK": "顯示字串積木",
            "OPERATION.HIDE_STRING_BLOCK": "隱藏字串積木",
            "OPERATION.SHOW_GRAPH_BLOCK": "顯示圖形積木",
            "OPERATION.HIDE_GRAPH_BLOCK": "隱藏圖形積木",
            "OPERATION.SHOW_BASE_BLOCK": "顯示進制積木",
            "OPERATION.HIDE_BASE_BLOCK": "隱藏進制積木",
            "OPERATION.SHOW_RARD": "顯示不常用積木",
            "OPERATION.HIDE_RARD": "隱藏不常用積木",
            "OPERATION.CONSTRAIN": "約束 [NUM] 介於 [LOW] 和 [HIGH] 之間",
            "OPERATION.LOOP_NUMBER": "讓 [NUM] 在範圍 [START] 到 [END] 內循環",
            "OPERATION.ROUND": "將 [NUM1] 四捨五入到 [NUM2] 小數位",
            "OPERATION.MAP_OFF": "映射 [NUM] 從 [START1]～[END1] 到 [START2]～[END2]",
            "OPERATION.BASE": "將 [NUM] 從進制 [INTO1] 轉換為進制 [INTO2]",
            "OPERATION.TO_BIN": "[NUM]₁₀ → 二進位制",
            "OPERATION.TO_DEC": "[NUM]₂ → 十進位制",
            "OPERATION.IS_BASE": "[NUM] 符合 [BASE] 進位制？",
            "OPERATION.FACTORIAL": "[NUM] 的階乘",
            "OPERATION.CALCULATE": "計算 [TEXT]",
            "OPERATION.FIND_PARTITION": "將範圍從 [RANGE_START] 到 [RANGE_END] 分割成 [NUM_PARTITIONS] 份，獲取第 [VALUE] 所屬的部分",
            "OPERATION.BOOLEAN_TO_NUMBER": "將布林值 [BOOLEAN] 轉換為數字",
            "OPERATION.NUMBER_NOT": "二進制取反 [NUM]",
            "OPERATION.PERCENT_OF": "[NUM2] 的 [NUM1] %",
            "OPERATION.IS_TRUE": "[OPERAND] 是真？",
            "OPERATION.CHECK_TYPE": "[INPUT] 是 [MODE] ？",
            "OPERATION.IS_BETWEEN": "[NUM] 在 [START] 到 [END] 之間？",
            "OPERATION.TEXT": "文字 [STRING]",
            "OPERATION.TEST": "判斷 [BOOLEAN] 真 [STRING1] 假 [STRING2]",
            "OPERATION.REPEAT": "重複 [STRING] [NUMBER] 次",
            "OPERATION.TRIM": "去除 [STRING] 兩端的空白",
            "OPERATION.INTERCEPT": "截取 [STRING] 從 [START] 到 [END]",
            "OPERATION.REMOVE": "刪除 [STRING] 從 [START] 到 [END]",
            "OPERATION.INSERT": "在 [STRING] 的第 [INDEX] 個字元前插入 [INSERT_STR]",
            "OPERATION.REPLACE": "在 [STRING1] 中把 [STRING2] 替換為 [STRING3]",
            "OPERATION.REPLACE_INDEX": "在 [STRING] 的 [START] 到 [END] 之間替換為 [REPLACEMENT]",
            "OPERATION.SPLIT": "按 [SYMBOL] 分割 [STRING] 獲取第 [NUM] 個元素",
            "OPERATION.SPLIT_REMOVE": "按 [SYMBOL] 分割 [STRING] 刪除第 [NUM] 個元素",
            "OPERATION.SPLIT_INSERT": "按 [SYMBOL] 分割 [STRING] 在第 [INDEX] 個元素前插入 [INSERT_STR]",
            "OPERATION.SPLIT_REPLACE": "按 [SYMBOL] 分割 [STRING] 把第 [INDEX] 個元素替換為 [REPLACE_STR]",
            "OPERATION.SPLIT_ANALYSIS": "按 [SYMBOL] 分割 [STRING] 獲取 [MODE]",
            "OPERATION.SPLIT_SHUFFLE": "按 [SYMBOL] 分割 [STRING] 隨機排序所有元素",
            "OPERATION.TOGGLE_CASE": "[STRING1] 在 [STRING2] 中 [MODE]",
            "OPERATION.CONVERT": "把 [STRING] [MODE]",
            "OPERATION.JOIN": "組合字串 [STRING]",
            "OPERATION.GET_JOIN": "組合的字串",
            "OPERATION.GET_TO_UNICODE": "獲取 [STRING] 的 Unicode 碼",
            "OPERATION.UNICODE_TO_STRING": "將 Unicode [STRING] 轉換為字符",
            "OPERATION.SHUFFLE": "隨機排序 [STRING]",
            "OPERATION.OVERWRITE": "使用 [OTHER] 覆蓋 [ORIGINAL] ，方向：[DIRECTION]",
            "OPERATION.PAD_STRING": "如果 [ORIGINAL_STR] 的長度小於 [REQUIRED_LENGTH] ，用 [CHAR_TO_ADD] 在 [POSITION] 補全",
            "OPERATION.CALCULATE_LINE_LENGTH": "從 ([X1],[Y1]) 到 ([X2],[Y2]) 的距離",
            "OPERATION.CALCULATE_LINE_DIRECTION": "從 ([X1],[Y1]) 到 ([X2],[Y2]) 的角度",
            "OPERATION.CALCULATE_INTERSECTION": "計算從線段 ([X1],[Y1]) 到 ([X2],[Y2]) 和線段 ([X3],[Y3]) 到 ([X4],[Y4]) 的交點",
            "OPERATION.TRIANGLE": "三角形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) 的 [MODE]",
            "OPERATION.TRIANGLE_AREA": "三角形 [S1] [S2] [S3] 面積",
            "OPERATION.RECTANGLE": "四邊形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) ([X4],[Y4]) 的 [MODE]",
            "OPERATION.GRAPH": "多邊形 [GRAPH] 的 [MODE]",
            "OPERATION.CIRCLE": "[UNITS] 為 [LENGTH] 的圆的 [MODE]",
            "OPERATION.IS_ANGLE_IN_RANGE": "∠ [ANGLE1] 在 ∠ [ANGLE2] 和 ∠ [ANGLE3] 之間的 [MODE]？",
            "OPERATION.CALCULATE_ANGLE_DIFFERENCE": "從 ∠ [ANGLE1] 到 ∠ [ANGLE2] 的 [MODE]",
            "OPERATION.GET_CONSTANT": "常數 [OPTION]",
            "OPERATION.TRUE": "真",
            "OPERATION.FALSE": "假",
            "OPERATION.RANDOM": "隨機",
            "OPERATION.TYPE_NUMBER": "數字",
            "OPERATION.TYPE_POSITIVE_NUMBER": "正數",
            "OPERATION.TYPE_NEGATIVE_NUMBER": "負數",
            "OPERATION.TYPE_EVEN_NUMBER": "偶數",
            "OPERATION.TYPE_ODD_NUMBER": "奇數",
            "OPERATION.TYPE_INTEGER_NUMBER": "整數",
            "OPERATION.TYPE_DECIMAL_NUMBER": "小數",
            "OPERATION.TYPE_PRIME_NUMBER": "質數",
            "OPERATION.TYPE_COMPOSITE_NUMBER": "合數",
            "OPERATION.TYPE_TEXT": "文字",
            "OPERATION.TYPE_BOOLEAN": "布林",
            "OPERATION.NAND": "NAND",
            "OPERATION.NOR": "NOR",
            "OPERATION.XOR": "XOR",
            "OPERATION.XNOR": "XNOR",
            "OPERATION.FIRST_OCCURRENCE": "第一次出現的位置",
            "OPERATION.LAST_OCCURRENCE": "最後一次出現的位置",
            "OPERATION.NUMBER_OF": "出現的次數",
            "OPERATION.UPPERCASE": "轉換為大寫",
            "OPERATION.LOWERCASE": "轉換為小寫",
            "OPERATION.CAPITALIZE": "轉換為首字母大寫",
            "OPERATION.REVERSE": "反轉",
            "OPERATION.FRONT": "前端",
            "OPERATION.BACK": "後端",
            "OPERATION.MAX": "最大值",
            "OPERATION.MIN": "最小值",
            "OPERATION.MEAN": "平均值",
            "OPERATION.SUM": "總和",
            "OPERATION.AREA": "面積",
            "OPERATION.CIRCUMFERENCE": "周長",
            "OPERATION.RADIUS": "半徑",
            "OPERATION.DIAMETER": "直徑",
            "OPERATION.INTERIOR_ANGLE": "內角",
            "OPERATION.EXTERIOR_ANGLE": "外角",
            "OPERATION.CLOCKWISE": "順時針",
            "OPERATION.COUNTER_CLOCKWISE": "逆時針",
            "OPERATION.ARG_APPLE": "apple",
            "OPERATION.ARG_BANANA": "banna",
            "OPERATION.ARG_PEACH": "peach",
            "OPERATION.ARG_MANGO": "mango"
        },
        "ar": {
            "OPERATION_EXT_NAME": "العمليات",
            "OPERATION_SETTING": "الإعدادات",
            "OPERATION.BOOLEAN_LABEL": "بوليان",
            "OPERATION.STRING_LABEL": "سلسلة",
            "OPERATION.GRAPH_LABEL": "رسم بياني",
            "OPERATION.BASE_LABEL": "القاعدة",
            "OPERATION.CONSTANT_LABEL": "ثابتة",
            "OPERATION.SHOW_MATH_BLOCK": "عرض كتلة العمليات الرياضية",
            "OPERATION.HIDE_MATH_BLOCK": "إخفاء كتلة العمليات الرياضية",
            "OPERATION.SHOW_BOOLEAN_BLOCK": "عرض كتلة بوليان",
            "OPERATION.HIDE_BOOLEAN_BLOCK": "إخفاء كتلة بوليان",
            "OPERATION.SHOW_STRING_BLOCK": "عرض كتلة السلسلة",
            "OPERATION.HIDE_STRING_BLOCK": "إخفاء كتلة السلسلة",
            "OPERATION.SHOW_RARD": "عرض الكتل غير الشائعة",
            "OPERATION.HIDE_RARD": "إخفاء الكتل غير الشائعة",
            "OPERATION.SHOW_GRAPH_BLOCK": "عرض كتلة الرسم البياني",
            "OPERATION.HIDE_GRAPH_BLOCK": "إخفاء كتلة الرسم البياني",
            "OPERATION.SHOW_BASE_BLOCK": "عرض كتلة القاعدة",
            "OPERATION.HIDE_BASE_BLOCK": "إخفاء كتلة القاعدة",
            "OPERATION.ROOT": "[NUM1] [RTL_ROOT] [NUM2]",
            "OPERATION.CONSTRAIN": "تقييد [NUM] بين [LOW] و [HIGH]",
            "OPERATION.LOOP_NUMBER": "دع [NUM] يتحرك في النطاق من [START] إلى [END]",
            "OPERATION.ROUND": "تقريب [NUM1] إلى [NUM2] خانات عشرية",
            "OPERATION.MAP_OFF": "تعيين [NUM] من [START1] ~ [END1] إلى [START2] ~ [END2]",
            "OPERATION.BASE": "تحويل [NUM] من النظام [INTO1] إلى النظام [INTO2]",
            "OPERATION.CALCULATE": "حساب [TEXT]",
            "OPERATION.FIND_PARTITION": "تقسيم النطاق من [RANGE_START] إلى [RANGE_END] إلى [NUM_PARTITIONS] أقسام و احصل على القسم [VALUE]",
            "OPERATION.BOOLEAN_TO_NUMBER": "تحويل [BOOLEAN] إلى رقم ثنائي",
            "OPERATION.NUMBER_NOT": "العملية الثنائية NOT [NUM]",
            "OPERATION.CUBE_ROOT": "؆[NUM]",
            "OPERATION.TO_PERCENT": "[NUM] ٪",
            "OPERATION.PERCENT_OF": "[NUM1] ٪ من [NUM2]",
            "OPERATION.IS_TRUE": "هل [OPERAND] صحيح؟",
            "OPERATION.CHECK_TYPE": "هل [INPUT] هو [MODE] ؟",
            "OPERATION.TEXT": "نص [STRING]",
            "OPERATION.TEST": "إذا كانت [BOOLEAN] صحيحة ، فهي [STRING1] ، وإلا فهي [STRING2]",
            "OPERATION.REPEAT": "كرر [STRING] [NUMBER] مرات",
            "OPERATION.TRIM": "إزالة المسافات البيضاء من طرفي [STRING]",
            "OPERATION.INTERCEPT": "قم بقطع [STRING] من [START] إلى [END]",
            "OPERATION.REPLACE": "استبدل [STRING2] بـ [STRING3] في [STRING1]",
            "OPERATION.REPLACE_INDEX": "استبدل في [STRING] ما بين الفهرسين [START] و [END] بـ [REPLACEMENT]",
            "OPERATION.SPLIT": "افصل [STRING] حسب [SYMBOL] وخذ العنصر [NUM]",
            "OPERATION.TOGGLE_CASE": "[STRING1] في [STRING2] [MODE]",
            "OPERATION.CONVERT": "تحويل [STRING] إلى [MODE]",
            "OPERATION.GET_TO_UNICODE": "الأونيكود الخاص ب [STRING]",
            "OPERATION.UNICODE_TO_STRING": "حرف الأونيكود لـ [STRING]",
            "OPERATION.CALCULATE_LINE_LENGTH": "المسافة من ([X1],[Y1]) إلى ([X2],[Y2])",
            "OPERATION.CALCULATE_LINE_DIRECTION": "الزاوية من ([X1],[Y1]) إلى ([X2],[Y2])",
            "OPERATION.CALCULATE_INTERSECTION": "حساب نقطة التقاطع بين القطعة ([X1],[Y1]) إلى ([X2],[Y2]) و القطعة ([X3],[Y3]) إلى ([X4],[Y4])",
            "OPERATION.TRIANGLE": " [MODE] المثلث ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3])",
            "OPERATION.TRIANGLE_AREA": "مساحة المثلث [S1] [S2] [S3]",
            "OPERATION.RECTANGLE": "[MODE] المربع ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) ([X4],[Y4])",
            "OPERATION.GRAPH": "[MODE] المضلع [GRAPH]",
            "OPERATION.CIRCLE": "دائرة: [UNITS] بعول [LENGTH] [MODE]",
            "OPERATION.CALCULATE_ANGLE_DIFFERENCE": "[MODE] الفرق بين الزاوية [ANGLE1] و [ANGLE2]",
            "OPERATION.GET_CONSTANT": "الثابت [OPTION]",
            "OPERATION.TRUE": "صحيح",
            "OPERATION.FALSE": "خاطئ",
            "OPERATION.RANDOM": "عشوائي",
            "OPERATION.TYPE_NUMBER": "رقم",
            "OPERATION.TYPE_POSITIVE_NUMBER": "رقم موجب",
            "OPERATION.TYPE_NEGATIVE_NUMBER": "رقم سالب",
            "OPERATION.TYPE_EVEN_NUMBER": "رقم زوجي",
            "OPERATION.TYPE_ODD_NUMBER": "رقم فردي",
            "OPERATION.TYPE_INTEGER_NUMBER": "رقم صحيح",
            "OPERATION.TYPE_DECIMAL_NUMBER": "رقم عشري",
            "OPERATION.TYPE_PRIME_NUMBER": "رقم أولي",
            "OPERATION.TYPE_COMPOSITE_NUMBER": "رقم مركب",
            "OPERATION.TYPE_TEXT": "نص",
            "OPERATION.TYPE_BOOLEAN": "قيمة بولينية",
            "OPERATION.NAND": "NAND",
            "OPERATION.NOR": "NOR",
            "OPERATION.XOR": "XOR",
            "OPERATION.XNOR": "XNOR",
            "OPERATION.FIRST_OCCURRENCE": "موضع الظهور الأول",
            "OPERATION.LAST_OCCURRENCE": "موضع الظهور الأخير",
            "OPERATION.NUMBER_OF": "عدد مرات الظهور",
            "OPERATION.UPPERCASE": "أحرف كبيرة",
            "OPERATION.LOWERCASE": "أحرف صغيرة",
            "OPERATION.CAPITALIZE": "أحرف ذات حروف أولى كبيرة",
            "OPERATION.REVERSE": "عكس",
            "OPERATION.AREA": "المساحة",
            "OPERATION.CIRCUMFERENCE": "المحيط",
            "OPERATION.RADIUS": "نصف القطر",
            "OPERATION.DIAMETER": "القطر",
            "OPERATION.INTERIOR_ANGLE": "الزاوية الداخلية",
            "OPERATION.EXTERIOR_ANGLE": "زاوية خارجية",
            "OPERATION.CLOCKWISE": "باتجاه عقارب الساعة",
            "OPERATION.COUNTER_CLOCKWISE": "عكس اتجاه عقارب الساعة",
            "OPERATION.SQRT2": "جذر ٢",
            "OPERATION.ARG_APPLE": "تفاحة",
            "OPERATION.ARG_BANANA": "موز"
        }
    });
    const formatMessage = Scratch.translate;

    const getBlockColor = () => {
        try {
            let theme = JSON.parse(localStorage.getItem('tw:theme'));
            switch (String(theme.blocks)) {
                case 'high-contrast': return 'highContrast';
                case 'dark': return 'dark';
                default: return 'normal';
            }
        }
        catch (error) {
            // 兼容旧版本 TW
            return 'normal';
        }
    }

    const typeIcons = {
        emptyIcon: {
            normal: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwbW0iIGhlaWdodD0iMjBtbSIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmcxIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiIHNvZGlwb2RpOmRvY25hbWU9Im51bGxJY29uLnN2ZyIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPHNvZGlwb2RpOm5hbWVkdmlldyBpZD0ibmFtZWR2aWV3MSIgcGFnZWNvbG9yPSIjNTA1MDUwIiBib3JkZXJjb2xvcj0iI2VlZWVlZSIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIiBpbmtzY2FwZTpkZXNrY29sb3I9IiM1MDUwNTAiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgaW5rc2NhcGU6em9vbT0iNS42NTY4NTQyIiBpbmtzY2FwZTpjeD0iNzkuNjM3OTAyIiBpbmtzY2FwZTpjeT0iMzQuNTU5ODQ0IiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMjciIGlua3NjYXBlOndpbmRvdy14PSIxOTEyIiBpbmtzY2FwZTp3aW5kb3cteT0iLTgiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzEiIC8+CiAgIDxkZWZzIGlkPSJkZWZzMSIgLz4KICAgPGNpcmNsZSBzdHlsZT0iZmlsbDojNjg1OWZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojNTM0N2NjO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBpZD0icGF0aDEiIGN4PSIxMCIgY3k9IjEwIiByPSI5LjUiIGlua3NjYXBlOmxhYmVsPSJkb3QiIC8+Cgo8L3N2Zz4K',
            highContrast: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwbW0iCiAgIGhlaWdodD0iMjBtbSIKICAgdmlld0JveD0iMCAwIDIwIDIwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImhpZ2gtY29udHJhc3Quc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcxIgogICBwYWdlY29sb3I9IiM1MDUwNTAiCiAgIGJvcmRlcmNvbG9yPSIjZWVlZWVlIgogICBib3JkZXJvcGFjaXR5PSIxIgogICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iIzUwNTA1MCIKICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDIiCiAgIGlua3NjYXBlOmN4PSI3OS44MTQ2NzkiCiAgIGlua3NjYXBlOmN5PSIzNC41NTk4NDQiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAyNyIKICAgaW5rc2NhcGU6d2luZG93LXg9IjE5MTIiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMSIgLz4KICAgPGRlZnMKICAgaWQ9ImRlZnMxIiAvPgogICA8Y2lyY2xlCiAgIHN0eWxlPSJmaWxsOiM5NjhjZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiM1MzQ3Y2M7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgIGlkPSJwYXRoMSIKICAgY3g9IjEwIgogICBjeT0iMTAiCiAgIHI9IjkuNSIKICAgaW5rc2NhcGU6bGFiZWw9ImRvdCIgLz4KCjwvc3ZnPgo=',
            dark: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwbW0iCiAgIGhlaWdodD0iMjBtbSIKICAgdmlld0JveD0iMCAwIDIwIDIwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImRhcmsuc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcxIgogICBwYWdlY29sb3I9IiM1MDUwNTAiCiAgIGJvcmRlcmNvbG9yPSIjZWVlZWVlIgogICBib3JkZXJvcGFjaXR5PSIxIgogICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iIzUwNTA1MCIKICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDIiCiAgIGlua3NjYXBlOmN4PSI3OS44MTQ2NzkiCiAgIGlua3NjYXBlOmN5PSIzNC41NTk4NDQiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAyNyIKICAgaW5rc2NhcGU6d2luZG93LXg9IjE5MTIiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMSIgLz4KICAgPGRlZnMKICAgaWQ9ImRlZnMxIiAvPgogICA8Y2lyY2xlCiAgIHN0eWxlPSJmaWxsOiMxZjFhNGM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiM2ODU5ZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgIGlkPSJwYXRoMSIKICAgY3g9IjEwIgogICBjeT0iMTAiCiAgIHI9IjkuNSIKICAgaW5rc2NhcGU6bGFiZWw9ImRvdCIgLz4KCjwvc3ZnPgo='
        },
        operatorsIcon: {
            normal: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwbW0iCiAgIGhlaWdodD0iMjBtbSIKICAgdmlld0JveD0iMCAwIDIwIDIwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9Im9wZXJhdG9yc0ljb24uc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcxIgogICBwYWdlY29sb3I9IiM1MDUwNTAiCiAgIGJvcmRlcmNvbG9yPSIjZWVlZWVlIgogICBib3JkZXJvcGFjaXR5PSIxIgogICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iIzUwNTA1MCIKICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICBpbmtzY2FwZTp6b29tPSIwLjUiCiAgIGlua3NjYXBlOmN4PSItMjAxIgogICBpbmtzY2FwZTpjeT0iLTQxIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMjciCiAgIGlua3NjYXBlOndpbmRvdy14PSIxOTEyIgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzEiIC8+CiAgIDxkZWZzCiAgIGlkPSJkZWZzMSIgLz4KICAgPGNpcmNsZQogICBzdHlsZT0iZmlsbDojNjg1OWZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojNTM0N2NjO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICBpZD0icGF0aDEiCiAgIGN4PSIxMCIKICAgY3k9IjEwIgogICByPSI5LjUiCiAgIGlua3NjYXBlOmxhYmVsPSJkb3QiIC8+Cgo8cGF0aAogICBkPSJtIDEyLjcsNC45Njc0OTgzIGMgLTAuODI1MDAxLC0wLjA3NSAtMS41NTI1MDIsMC41MzI1MDEgLTEuNjI3NSwxLjM2NTAwMiBsIC0wLjE4NzUxMiwyLjE2NzUgaCAyLjExNSBWIDEwIGggLTIuMjUgbCAtMC4zMjk5OTksMy44MDI1MDIgQSAyLjk4OTUwMDIsMi45ODk1MDAyIDAgMCAxIDcuMTcyNDg4NiwxNi41MjUgYSAzLjAwNTI1LDMuMDA1MjUwMSAwIDAgMSAtMi4yOTUsLTEuNDAyNTAxIGwgMS4xMjUsLTEuMTI1IGMgMC4xOCwwLjU1NTAwMiAwLjY3NSwwLjk4MjUwMyAxLjI5NzUsMS4wMzUgMC44MjUsMC4wNzUgMS41NTI0OTksLTAuNTMyNDk5IDEuNjI3NSwtMS4zNjQ5OTcgTCA5LjI0OTk4ODYsMTAgaCAtMi4yNSBWIDguNTAwMDAwMyBoIDIuMzc3NSBsIDAuMjAyNTA4LC0yLjMwMjUgYyAwLjE0MjQ5NywtMS42NTAwMDEgMS41OTc1MDE0LC0yLjg3MjUwMSAzLjI0NzUwMDQsLTIuNzIyNTAxIDAuOTgyNSwwLjA4MjUxIDEuODA3NSwwLjYzIDIuMjk1LDEuNDAyNDk5IGwgLTEuMTI1LDEuMTI1IEMgMTMuODE3NSw1LjQ0NzQ5OTMgMTMuMzIyNSw1LjAyMDAwMDMgMTIuNyw0Ljk2NzQ5ODMgWiIKICAgZmlsbD0iI2ZmZmZmZiIKICAgaWQ9InBhdGgxLTgiCiAgIHN0eWxlPSJzdHJva2Utd2lkdGg6MC43NTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIgogICBpbmtzY2FwZTpsYWJlbD0iaWNvbiIgLz48ZwogICBpZD0iZzIiCiAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLDEuMjUsLTUuNjg3NTAwMiwtNS42ODc1MDAyKSIKICAgaW5rc2NhcGU6bGFiZWw9InBsdXMtZyIKICAgc3R5bGU9Im9wYWNpdHk6MC4yO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIj48cmVjdAogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgaWQ9InJlY3QyIgogICAgIHdpZHRoPSI1IgogICAgIGhlaWdodD0iMS41IgogICAgIHg9IjE1LjA1IgogICAgIHk9IjE2Ljc5OTk5OSIKICAgICByeT0iMC43NSIgLz48cmVjdAogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgaWQ9InJlY3QyLTMiCiAgICAgd2lkdGg9IjUiCiAgICAgaGVpZ2h0PSIxLjUiCiAgICAgeD0iMTUuMDUiCiAgICAgeT0iLTE4LjI5OTk5OSIKICAgICByeT0iMC43NSIKICAgICB0cmFuc2Zvcm09InJvdGF0ZSg5MCkiIC8+PC9nPjxnCiAgIGlkPSJnMi01IgogICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwxLjI1LC01LjY4NzUwMDIsLTUuNjg3NTAwMikiCiAgIGlua3NjYXBlOmxhYmVsPSJwbHVzLWkiPjxyZWN0CiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MDtzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgaWQ9InJlY3QyLTYiCiAgICAgd2lkdGg9IjUiCiAgICAgaGVpZ2h0PSIxLjUiCiAgICAgeD0iMTUuMDUiCiAgICAgeT0iMTYuNzk5OTk5IgogICAgIHJ5PSIwLjc1IiAvPjxyZWN0CiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MDtzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgaWQ9InJlY3QyLTMtMyIKICAgICB3aWR0aD0iNSIKICAgICBoZWlnaHQ9IjEuNSIKICAgICB4PSIxNS4wNSIKICAgICB5PSItMTguMjk5OTk5IgogICAgIHJ5PSIwLjc1IgogICAgIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgLz48L2c+PC9zdmc+Cg==',
            highContrast: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwbW0iCiAgIGhlaWdodD0iMjBtbSIKICAgdmlld0JveD0iMCAwIDIwIDIwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImhpZ2gtY29udHJhc3Quc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcxIgogICBwYWdlY29sb3I9IiM1MDUwNTAiCiAgIGJvcmRlcmNvbG9yPSIjZWVlZWVlIgogICBib3JkZXJvcGFjaXR5PSIxIgogICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iIzUwNTA1MCIKICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICBpbmtzY2FwZTp6b29tPSI1LjQ5NjcxODciCiAgIGlua3NjYXBlOmN4PSIyNS4wMTQ5MjQiCiAgIGlua3NjYXBlOmN5PSIyNS43NDI2MzEiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAyNyIKICAgaW5rc2NhcGU6d2luZG93LXg9IjE5MTIiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMSIgLz4KICAgPGRlZnMKICAgaWQ9ImRlZnMxIiAvPgogICA8Y2lyY2xlCiAgIHN0eWxlPSJmaWxsOiM5NjhjZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiM1MzQ3Y2M7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgIGlkPSJwYXRoMSIKICAgY3g9IjEwIgogICBjeT0iMTAiCiAgIHI9IjkuNSIKICAgaW5rc2NhcGU6bGFiZWw9ImRvdCIgLz4KCjxwYXRoCiAgIGQ9Im0gMTIuNyw0Ljk2NzQ5ODMgYyAtMC44MjUwMDEsLTAuMDc1IC0xLjU1MjUwMiwwLjUzMjUwMSAtMS42Mjc1LDEuMzY1MDAyIGwgLTAuMTg3NTEyLDIuMTY3NSBoIDIuMTE1IFYgMTAgaCAtMi4yNSBsIC0wLjMyOTk5OSwzLjgwMjUwMiBBIDIuOTg5NTAwMiwyLjk4OTUwMDIgMCAwIDEgNy4xNzI0ODg2LDE2LjUyNSBhIDMuMDA1MjUsMy4wMDUyNTAxIDAgMCAxIC0yLjI5NSwtMS40MDI1MDEgbCAxLjEyNSwtMS4xMjUgYyAwLjE4LDAuNTU1MDAyIDAuNjc1LDAuOTgyNTAzIDEuMjk3NSwxLjAzNSAwLjgyNSwwLjA3NSAxLjU1MjQ5OSwtMC41MzI0OTkgMS42Mjc1LC0xLjM2NDk5NyBMIDkuMjQ5OTg4NiwxMCBoIC0yLjI1IFYgOC41MDAwMDAzIGggMi4zNzc1IGwgMC4yMDI1MDgsLTIuMzAyNSBjIDAuMTQyNDk3LC0xLjY1MDAwMSAxLjU5NzUwMTQsLTIuODcyNTAxIDMuMjQ3NTAwNCwtMi43MjI1MDEgMC45ODI1LDAuMDgyNTEgMS44MDc1LDAuNjMgMi4yOTUsMS40MDI0OTkgbCAtMS4xMjUsMS4xMjUgQyAxMy44MTc1LDUuNDQ3NDk5MyAxMy4zMjI1LDUuMDIwMDAwMyAxMi43LDQuOTY3NDk4MyBaIgogICBmaWxsPSIjZmZmZmZmIgogICBpZD0icGF0aDEtOCIKICAgc3R5bGU9InN0cm9rZS13aWR0aDowLjc1Oy1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZykiCiAgIGlua3NjYXBlOmxhYmVsPSJpY29uIiAvPjxnCiAgIGlkPSJnMiIKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsMS4yNSwtNS42ODc1MDAyLC01LjY4NzUwMDIpIgogICBpbmtzY2FwZTpsYWJlbD0icGx1cy1nIgogICBzdHlsZT0ib3BhY2l0eTowLjI7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiPjxyZWN0CiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICBpZD0icmVjdDIiCiAgICAgd2lkdGg9IjUiCiAgICAgaGVpZ2h0PSIxLjUiCiAgICAgeD0iMTUuMDUiCiAgICAgeT0iMTYuNzk5OTk5IgogICAgIHJ5PSIwLjc1IiAvPjxyZWN0CiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICBpZD0icmVjdDItMyIKICAgICB3aWR0aD0iNSIKICAgICBoZWlnaHQ9IjEuNSIKICAgICB4PSIxNS4wNSIKICAgICB5PSItMTguMjk5OTk5IgogICAgIHJ5PSIwLjc1IgogICAgIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgLz48L2c+PGcKICAgaWQ9ImcyLTUiCiAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLDEuMjUsLTUuNjg3NTAwMiwtNS42ODc1MDAyKSIKICAgaW5rc2NhcGU6bGFiZWw9InBsdXMtaSI+PHJlY3QKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIKICAgICBpZD0icmVjdDItNiIKICAgICB3aWR0aD0iNSIKICAgICBoZWlnaHQ9IjEuNSIKICAgICB4PSIxNS4wNSIKICAgICB5PSIxNi43OTk5OTkiCiAgICAgcnk9IjAuNzUiIC8+PHJlY3QKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIKICAgICBpZD0icmVjdDItMy0zIgogICAgIHdpZHRoPSI1IgogICAgIGhlaWdodD0iMS41IgogICAgIHg9IjE1LjA1IgogICAgIHk9Ii0xOC4yOTk5OTkiCiAgICAgcnk9IjAuNzUiCiAgICAgdHJhbnNmb3JtPSJyb3RhdGUoOTApIiAvPjwvZz48L3N2Zz4K',
            dark: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwbW0iCiAgIGhlaWdodD0iMjBtbSIKICAgdmlld0JveD0iMCAwIDIwIDIwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImRhcmsuc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcxIgogICBwYWdlY29sb3I9IiM1MDUwNTAiCiAgIGJvcmRlcmNvbG9yPSIjZWVlZWVlIgogICBib3JkZXJvcGFjaXR5PSIxIgogICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iIzUwNTA1MCIKICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICBpbmtzY2FwZTp6b29tPSI1LjQ5NjcxODciCiAgIGlua3NjYXBlOmN4PSIyMi44MzE4MDMiCiAgIGlua3NjYXBlOmN5PSI0NC4yOTkxNTYiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAyNyIKICAgaW5rc2NhcGU6d2luZG93LXg9IjE5MTIiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMSIgLz4KICAgPGRlZnMKICAgaWQ9ImRlZnMxIiAvPgogICA8Y2lyY2xlCiAgIHN0eWxlPSJmaWxsOiMxZjFhNGM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiM2ODU5ZmY7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgIGlkPSJwYXRoMSIKICAgY3g9IjEwIgogICBjeT0iMTAiCiAgIHI9IjkuNSIKICAgaW5rc2NhcGU6bGFiZWw9ImRvdCIgLz4KCjxwYXRoCiAgIGQ9Im0gMTIuNyw0Ljk2NzQ5ODMgYyAtMC44MjUwMDEsLTAuMDc1IC0xLjU1MjUwMiwwLjUzMjUwMSAtMS42Mjc1LDEuMzY1MDAyIGwgLTAuMTg3NTEyLDIuMTY3NSBoIDIuMTE1IFYgMTAgaCAtMi4yNSBsIC0wLjMyOTk5OSwzLjgwMjUwMiBBIDIuOTg5NTAwMiwyLjk4OTUwMDIgMCAwIDEgNy4xNzI0ODg2LDE2LjUyNSBhIDMuMDA1MjUsMy4wMDUyNTAxIDAgMCAxIC0yLjI5NSwtMS40MDI1MDEgbCAxLjEyNSwtMS4xMjUgYyAwLjE4LDAuNTU1MDAyIDAuNjc1LDAuOTgyNTAzIDEuMjk3NSwxLjAzNSAwLjgyNSwwLjA3NSAxLjU1MjQ5OSwtMC41MzI0OTkgMS42Mjc1LC0xLjM2NDk5NyBMIDkuMjQ5OTg4NiwxMCBoIC0yLjI1IFYgOC41MDAwMDAzIGggMi4zNzc1IGwgMC4yMDI1MDgsLTIuMzAyNSBjIDAuMTQyNDk3LC0xLjY1MDAwMSAxLjU5NzUwMTQsLTIuODcyNTAxIDMuMjQ3NTAwNCwtMi43MjI1MDEgMC45ODI1LDAuMDgyNTEgMS44MDc1LDAuNjMgMi4yOTUsMS40MDI0OTkgbCAtMS4xMjUsMS4xMjUgQyAxMy44MTc1LDUuNDQ3NDk5MyAxMy4zMjI1LDUuMDIwMDAwMyAxMi43LDQuOTY3NDk4MyBaIgogICBmaWxsPSIjZmZmZmZmIgogICBpZD0icGF0aDEtOCIKICAgc3R5bGU9InN0cm9rZS13aWR0aDowLjc1Oy1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZykiCiAgIGlua3NjYXBlOmxhYmVsPSJpY29uIiAvPjxnCiAgIGlkPSJnMiIKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsMS4yNSwtNS42ODc1MDAyLC01LjY4NzUwMDIpIgogICBpbmtzY2FwZTpsYWJlbD0icGx1cy1nIgogICBzdHlsZT0ib3BhY2l0eTowLjI7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiPjxyZWN0CiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICBpZD0icmVjdDIiCiAgICAgd2lkdGg9IjUiCiAgICAgaGVpZ2h0PSIxLjUiCiAgICAgeD0iMTUuMDUiCiAgICAgeT0iMTYuNzk5OTk5IgogICAgIHJ5PSIwLjc1IiAvPjxyZWN0CiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICBpZD0icmVjdDItMyIKICAgICB3aWR0aD0iNSIKICAgICBoZWlnaHQ9IjEuNSIKICAgICB4PSIxNS4wNSIKICAgICB5PSItMTguMjk5OTk5IgogICAgIHJ5PSIwLjc1IgogICAgIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgLz48L2c+PGcKICAgaWQ9ImcyLTUiCiAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLDEuMjUsLTUuNjg3NTAwMiwtNS42ODc1MDAyKSIKICAgaW5rc2NhcGU6bGFiZWw9InBsdXMtaSI+PHJlY3QKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIKICAgICBpZD0icmVjdDItNiIKICAgICB3aWR0aD0iNSIKICAgICBoZWlnaHQ9IjEuNSIKICAgICB4PSIxNS4wNSIKICAgICB5PSIxNi43OTk5OTkiCiAgICAgcnk9IjAuNzUiIC8+PHJlY3QKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIKICAgICBpZD0icmVjdDItMy0zIgogICAgIHdpZHRoPSI1IgogICAgIGhlaWdodD0iMS41IgogICAgIHg9IjE1LjA1IgogICAgIHk9Ii0xOC4yOTk5OTkiCiAgICAgcnk9IjAuNzUiCiAgICAgdHJhbnNmb3JtPSJyb3RhdGUoOTApIiAvPjwvZz48L3N2Zz4K'
        },
        mathIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwbW0iCiAgIGhlaWdodD0iMjBtbSIKICAgdmlld0JveD0iMCAwIDIwIDIwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9Im1hdGhJY29uLnN2ZyIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxzb2RpcG9kaTpuYW1lZHZpZXcKICAgaWQ9Im5hbWVkdmlldzEiCiAgIHBhZ2Vjb2xvcj0iIzUwNTA1MCIKICAgYm9yZGVyY29sb3I9IiNlZWVlZWUiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjNTA1MDUwIgogICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgIGlua3NjYXBlOnpvb209IjUuNjU2ODU0MiIKICAgaW5rc2NhcGU6Y3g9Ijc5LjgxNDY3OSIKICAgaW5rc2NhcGU6Y3k9IjM0LjM4MzA2OCIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDI3IgogICBpbmtzY2FwZTp3aW5kb3cteD0iMTkxMiIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcxIiAvPgoJPGRlZnMKICAgaWQ9ImRlZnMxIiAvPgoJCgk8ZwogICBpZD0icGkiCiAgIHRyYW5zZm9ybT0ibWF0cml4KDQuODk5ODAzMiwwLDAsNC44OTk4MDMyLDEwNC4yMzU0NywtNDIuOTQ2OTgyKSIKICAgaW5rc2NhcGU6bGFiZWw9InBpIj4KCQk8cGF0aAogICBzdHlsZT0iY29sb3I6IzAwMDAwMDtmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjE7LWlua3NjYXBlLXN0cm9rZTpub25lIgogICBkPSJtIC0xOC4yNDcyNzMsOS43NDE0MDggLTAuMDA3OCwwLjAwOTc3IGMgLTAuMTA0MjMsMC4xMTAzMTEzIC0wLjI1NjM0MiwwLjE2NjAyMzYgLTAuNDU3MDE0LDAuMTY2MDIzNiBoIC0wLjkzNTUxMiBjIC0wLjEzNjI5NSwwIC0wLjI1ODUzNiwwLjAxODA3OSAtMC4zNjUyMiwwLjA1NDY5IC0wLjEwODkyMSwwLjAzNzcwMSAtMC4yMjUwNDksMC4xMDQ1NTM0IC0wLjM0NzY0MiwwLjIwMTE4MzQgbCAtMC4wMDc4LDAuMDA1OSAwLjAwNTksMC4wMDc4IDAuMTQyNTcyLDAuMjI4NTI4IDAuMDA5OCwtMC4wMDc4IGMgMC4xNDAwODQsLTAuMTI4MjU4IDAuMzAyNjI2LC0wLjE5MjA0MyAwLjQ4NjMxLC0wLjIwNTA4OCAtMC4xNjM3NzgsMC41MDkyNjIgLTAuMzUxMjkyLDEuMDQwMjQ2IC0wLjU2NjM4NSwxLjU5MzgyNiBsIC0wLjAwNTksMC4wMTM2NyBoIDAuMzMzOTcxIGwgMC4wMDIsLTAuMDA3OCBjIDAuMTg5NDY1LC0wLjU5MTA5NiAwLjM2NjQ5NSwtMS4xMjg3OTUgMC41MjkyNzcsLTEuNjE3MjY2IGggMC40MDYyMzUgYyAtMC4wODQ5MiwwLjI4OTYwNyAtMC4xNTg3NzUsMC41NTM0NDcgLTAuMjE4NzQyLDAuNzg1MTk0IC0wLjA1NDg3LDAuMjEyMjczIC0wLjA4MjAzLDAuMzY5NDcxIC0wLjA4MjAzLDAuNDc0NjMxIDAsMC4xNDQ3MDUgMC4wNDM1NSwwLjI1NzQ4NCAwLjEzMjgwOCwwLjMzMzk5OSAwLjA3MjI5LDAuMDYxNjYgMC4xNjY4NTksMC4wOTE4IDAuMjc5Mjg1LDAuMDkxOCAwLjI4NDEyOSwwIDAuNTQ2MzI2LC0wLjE3MDQ5NSAwLjc4NTEyNywtMC41MDU4ODMgbCAwLjAwMzksLTAuMDA1OSAtMC4xOTEzOTksLTAuMjM0Mzg2IC0wLjAwNzgsMC4wMTE3MiBjIC0wLjE4ODMwMiwwLjI5NzM5OCAtMC4zNzU3MDYsMC40NDMzODEgLTAuNTYwNTI2LDAuNDQzMzgxIC0wLjA1NTQxLDAgLTAuMDk0NjMsLTAuMDE0NjUgLTAuMTIxMDg4LC0wLjA0NDkyIC0wLjAyNjQ2LC0wLjAzMDI4IC0wLjA0MTAyLC0wLjA3NjQ4IC0wLjA0MTAyLC0wLjE0MDYzMiAwLC0wLjA1MzM3IDAuMDEwNTUsLTAuMTMxNTI2IDAuMDMzMiwtMC4yMzI0MzMgMC4wNjE0MywtMC4yNzg0OTMgMC4xNTM5OTMsLTAuNjA1MzMzIDAuMjczNDI4LC0wLjk3NjYwNyAwLjExNjk4MSwtMC4wMDE0IDAuMjE0NjU3LC0wLjAwOTIgMC4yODkwNSwtMC4wMjM0NCAwLjEzODA4MSwtMC4wMjYxNSAwLjI1MzE4MiwtMC4wODQ2MSAwLjM0NzY0MywtMC4xNzM4MzY3IGwgMC4wMDU5LC0wLjAwMzkgeiIKICAgaWQ9InBhdGg1IgogICBzb2RpcG9kaTpub2RldHlwZXM9ImNjc3NjY2NjY2NjY2NjY2NjY3Njc2NjY2NzY3NjY2NjY2MiIC8+Cgk8L2c+Cjwvc3ZnPgo=',
        booleanIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMjBtbSIKICAgaGVpZ2h0PSIyMG1tIgogICB2aWV3Qm94PSIwIDAgMjAgMjAiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzEiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMy4xICg5MWI2NmIwNzgzLCAyMDIzLTExLTE2KSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iYm9vbGVhbkljb24uc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3MSIKICAgICBwYWdlY29sb3I9IiM1MDUwNTAiCiAgICAgYm9yZGVyY29sb3I9IiNlZWVlZWUiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iIzUwNTA1MCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6em9vbT0iOCIKICAgICBpbmtzY2FwZTpjeD0iMjkuMzEyNSIKICAgICBpbmtzY2FwZTpjeT0iMzYuNTYyNSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAyNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMTkxMiIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcxIiAvPjxkZWZzCiAgICAgaWQ9ImRlZnMxIiAvPjxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MS4zNzQ5NiIKICAgICBkPSJNIDQuODgxOTQ1NSwxMS43OTUyNDQgMy4wODcsMTAuMDAwMTYyIDQuODgxOTQ1NSw4LjIwNTA4MDggNi42NzY4OTA5LDYuNDEgaCAzLjMyMjk0NDcgMy4zMjI5NDU0IGwgMS43OTQ5NDUsMS43OTUwODA4IDEuNzk0OTQ1LDEuNzk1MDgxMiAtMS43OTQ5NDUsMS43OTUwODIgLTEuNzk0OTQ1LDEuNzk1MDggSCA5Ljk5OTgzNTYgNi42NzY4OTA5IFogbSA5LjY1NjQ2ODUsLTAuMzExOTEyIDEuNDgzMTY0LC0xLjQ4MzE3IC0xLjQ4MzE3LC0xLjQ4MzE2OTkgLTEuNDgzMTcsLTEuNDgzMTY5NyBIIDkuOTk5ODM1NiA2Ljk0NDQzMzUgbCAtMS40ODMxNDIyLDEuNDgzMTQyMiAtMS40ODMxNDIxLDEuNDgzMTQyNCAxLjQ3NTQzMSwxLjQ3NTU5NSAxLjQ3NTQzMDksMS40NzU1OTYgMC4wOTA0MzYsMC4wMTAwNCAwLjA5MDQzNiwwLjAxMDA0IDIuOTcyNjg1OSwtMC4wMDI1IDIuOTcyNjg0LC0wLjAwMjUgeiBtIC0yLjk1OTk1OCwtMC4yNzM3NTIgLTEuMjA5Mjg1LC0xLjIwOTQ4NSAxLjIxNTc1LC0xLjIxNTc1MDggMS4yMTU3NSwtMS4yMTU3NTAxIDEuMjE1NzUxLDEuMjE1NzUwMSAxLjIxNTc1LDEuMjE1NzUwOCAtMS4yMDkyODUsMS4yMDk0ODUgLTEuMjA5Mjg0LDEuMjA5NDg1IGggLTAuMDEyOTMgLTAuMDEyOTIgeiIKICAgICBpZD0icGF0aDExIiAvPjwvc3ZnPgo=',
        stringIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwbW0iCiAgIGhlaWdodD0iMjBtbSIKICAgdmlld0JveD0iMCAwIDIwIDIwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9InN0cmluZ0ljb24uc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcxIgogICBwYWdlY29sb3I9IiM1MDUwNTAiCiAgIGJvcmRlcmNvbG9yPSIjZWVlZWVlIgogICBib3JkZXJvcGFjaXR5PSIxIgogICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iIzUwNTA1MCIKICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICBpbmtzY2FwZTp6b29tPSI0IgogICBpbmtzY2FwZTpjeD0iMjEuNjI1IgogICBpbmtzY2FwZTpjeT0iNTIuNjI1IgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMjciCiAgIGlua3NjYXBlOndpbmRvdy14PSIxOTEyIgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzEiIC8+CiAgIDxkZWZzCiAgIGlkPSJkZWZzMSIgLz4KICAgCgo8cGF0aAogICBkPSJtIDUuNzEzMDM2LDYuMDU4IDAuMjc3MTQ2OSwwLjM3MTc3MDQgcSAtMC45MzI4MzU5LDAuODc4NzMgLTAuOTY2NjM0MiwxLjc5ODAxNjggMC4yOTc0MjU5LDAgMC41MjA0OTUzLDAuMTIxNjcwMyAwLjQ4NjY5NjksMC4yNjM2MTkgMC40ODY2OTY5LDAuODExMTM1NCAwLDAuMjcwMzc4NSAtMC4xMzUxOTM2LDAuNTEzNzE5MiAtMC4yOTA2NjYzLDAuNTIwNDc4OSAtMC44Nzg3NTgzLDAuNTIwNDc4OSAtMC40MzI2MTk1LDAgLTAuNzM2ODA1MSwtMC4zMDQxNzYyIFEgMy45NDIsOS41NTI2NDE3IDMuOTQyLDguOTg0ODQ3IDMuOTQyLDguMjgxODYyOSA0LjMyNzMwMTcsNy41NTE4NDEgNC43ODAyMDAzLDYuNjczMTExIDUuNzEzMDM2LDYuMDU4IFogbSAyLjYyOTUxNTEsMCAwLjI3NzE0NjUsMC4zNzE3NzA0IHEgLTAuOTMyODM1LDAuODc4NzMgLTAuOTY2NjMzNiwxLjc5ODAxNjggMC4yOTc0MjU4LDAgMC41MjA0OTU0LDAuMTIxNjcwMyAwLjQ4NjY5NjgsMC4yNjM2MTkgMC40ODY2OTY4LDAuODExMTM1NCAwLDAuMjcwMzc4NSAtMC4xMzUxOTQxLDAuNTEzNzE5MiAtMC4yOTA2NjU3LDAuNTIwNDc4OSAtMC44Nzg3NTgyLDAuNTIwNDc4OSAtMC40MzI2MTksMCAtMC43MzY4MDQ4LC0wLjMwNDE3NjIgUSA2LjU3MTUxNTIsOS41NTI2NDE3IDYuNTcxNTE1Miw4Ljk4NDg0NyBxIDAsLTAuNzAyOTg0MSAwLjM4NTMwMTYsLTEuNDMzMDA2IFEgNy40MDk3MTUxLDYuNjczMTExIDguMzQyNTUxMSw2LjA1OCBaIgogICBpZD0idGV4dDEiCiAgIHN0eWxlPSJmb250LXNpemU6MTMuODQzNnB4O3RleHQtYWxpZ246Y2VudGVyO3RleHQtYW5jaG9yOm1pZGRsZTtmaWxsOiNmZmZmZmY7c3Ryb2tlOiM2ODU5ZmY7c3Ryb2tlLXdpZHRoOjcuODAzNjRlLTA5IgogICBhcmlhLWxhYmVsPSLigJwiIC8+PHBhdGgKICAgZD0ibSAxNC4yODc3MjcsMTMuOTQxMTIzIC0wLjI3NzEzMiwtMC4zNzE3NyBxIDAuOTMyNzg2LC0wLjg3ODczIDAuOTY2NTgyLC0xLjc5ODAxNyAtMC4yOTc0MSwwIC0wLjUyMDQ2NywtMC4xMjE2NyAtMC40ODY2NzEsLTAuMjYzNjE5IC0wLjQ4NjY3MSwtMC44MTExMzUgMCwtMC4yNzAzNzkgMC4xMzUxODcsLTAuNTEzNzIgMC4yOTA2NSwtMC41MjA0NzgxIDAuODc4NzEsLTAuNTIwNDc4MSAwLjQzMjU5NiwwIDAuNzM2NzY1LDAuMzA0MTc2MSAwLjMzNzk2NiwwLjMzNzk3MyAwLjMzNzk2NiwwLjkwNTc2NyAwLDAuNzAyOTg1IC0wLjM4NTI4MSwxLjQzMzAwNiAtMC40NTI4NzQsMC44Nzg3MyAtMS4zODU2NTksMS40OTM4NDEgeiBtIC0yLjYyOTM3MiwwIC0wLjI3NzEzMiwtMC4zNzE3NyBxIDAuOTMyNzg0LC0wLjg3ODczIDAuOTY2NTgxLC0xLjc5ODAxNyAtMC4yOTc0MSwwIC0wLjUyMDQ2NiwtMC4xMjE2NyAtMC40ODY2NzEsLTAuMjYzNjE5IC0wLjQ4NjY3MSwtMC44MTExMzUgMCwtMC4yNzAzNzkgMC4xMzUxODcsLTAuNTEzNzIgMC4yOTA2NDksLTAuNTIwNDc4MSAwLjg3ODcxLC0wLjUyMDQ3ODEgMC40MzI1OTYsMCAwLjczNjc2NSwwLjMwNDE3NjEgMC4zMzc5NjYsMC4zMzc5NzMgMC4zMzc5NjYsMC45MDU3NjcgMCwwLjcwMjk4NSAtMC4zODUyODEsMS40MzMwMDYgLTAuNDUyODc0LDAuODc4NzMgLTEuMzg1NjU5LDEuNDkzODQxIHoiCiAgIGlkPSJ0ZXh0MS02IgogICBzdHlsZT0iZm9udC1zaXplOjEzLjg0MzZweDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWFuY2hvcjptaWRkbGU7ZmlsbDojZmZmZmZmO3N0cm9rZTojNjg1OWZmO3N0cm9rZS13aWR0aDo3LjgwMzQzZS0wOSIKICAgYXJpYS1sYWJlbD0i4oCcIiAvPjwvc3ZnPgo=',
        splitIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwbW0iCiAgIGhlaWdodD0iMjBtbSIKICAgdmlld0JveD0iMCAwIDIwIDIwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9InNwbGl0SWNvbi5zdmciCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgaWQ9Im5hbWVkdmlldzEiCiAgIHBhZ2Vjb2xvcj0iIzUwNTA1MCIKICAgYm9yZGVyY29sb3I9IiNlZWVlZWUiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjNTA1MDUwIgogICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgIGlua3NjYXBlOnpvb209IjMuODg2NzY3MSIKICAgaW5rc2NhcGU6Y3g9IjQwLjUyMjEwOSIKICAgaW5rc2NhcGU6Y3k9IjU0LjE1ODEyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMjciCiAgIGlua3NjYXBlOndpbmRvdy14PSIxOTEyIgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzEiIC8+CiAgIDxkZWZzCiAgIGlkPSJkZWZzMSIgLz4KICAgCgo8cGF0aAogICBzdHlsZT0iY29sb3I6IzAwMDAwMDtmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuODE3NzM1Oy1pbmtzY2FwZS1zdHJva2U6bm9uZSIKICAgZD0iTSAxMy4xODA0OTcsNS45NTI2NzU4IDUuOTUyNjc1OCwxMy4xODA0OTcgNi44MjAwMTQ0LDE0LjA0NzgzNSAxNC4wNDc4MzUsNi44MjAwMTQzIFoiCiAgIGlkPSJwYXRoNiIKICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIKICAgaW5rc2NhcGU6bGFiZWw9Ii8iIC8+PHBhdGgKICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonSmV0QnJhaW5zIE1vbm8sIE5vcm1hbCc7ZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDowLjgxNzczNTstaW5rc2NhcGUtc3Ryb2tlOm5vbmUiCiAgIGQ9Im0gNS45NDE2NzI0LDUuODE3MDk1NiBjIC0wLjQ0Mjg2ODksMCAtMC44Mjk3NTc5LDAuMTQyOTg4NiAtMS4xMTMyMDUxLDAuNDI2NDM1OSBDIDQuNTQ1MDE5OSw2LjUyNjk3ODcgNC40MDM2Mjg2LDYuOTEyMjcwNSA0LjQwMzYyODYsNy4zNTUxMzk0IFYgOC4zMzQxODUgSCA1LjYxOTA1MDUgViA3LjM1NTEzOTQgYyAwLC0wLjE3ODU0NDUgMC4wMzkwMzgsLTAuMjgwODkzMSAwLjA4NDY0OCwtMC4zMzM4MDE4IDAuMDQ1NjExLC0wLjA1MjkwOCAwLjEwNzg0MTEsLTAuMDg0NjQ4IDAuMjQ3NTU2NCwtMC4wODQ2NDggMC4xMTQzNjU3LDAgMC4xODc2Mzg5LDAuMDI3ODczIDAuMjU4NzM2NCwwLjA5NDIzMSBsIDAuMDA0OCwwLjAwNDggMC4wMDYzOSwwLjAwNDggYyAwLjA5NzU0LDAuMDc5MjUxIDAuMTkyOTY1LDAuMTgyNTc0MSAwLjI4NDI5MDcsMC4zMTMwMzkxIDAuMTA0MzA3OSwwLjE0OTAxMTMgMC4yMTkyNTU4LDAuMjk3Njg4NyAwLjM0NDk4MTcsMC40NDU2MDE1IGwgMC4wMDMxOSwwLjAwNDggMC4wMDMxOSwwLjAwMzE5IGMgMC4xNDQzMDkyLDAuMTUyMzI2NSAwLjMxNTY5NTUsMC4yODM0NzgzIDAuNTExMDg0MSwwLjM5Mjg5NiBsIDAuMDAzMTksMC4wMDE1OSAwLjAwMzE5LDAuMDAxNTkgYyAwLjIxNTg2NDcsMC4xMTIyNDk2IDAuNDcxMDIxMiwwLjE2MjkwNzkgMC43NjAyMzc2LDAuMTYyOTA3OSAwLjQzNTY4MjksMCAwLjgxNjQzMzIsLTAuMTQyOTM3NCAxLjA5MjQ0MjQsLTAuNDI2NDM1OCBDIDkuNTA5NDUzNSw3LjY1NjM4MDYgOS42NTE4MjM5LDcuMjcwMTg2NiA5LjY1MTgyMzksNi44MjgwODM5IFYgNS44NDkwMzg0IGggLTEuMjE1NDIyIHYgMC45NzkwNDU1IGMgMCwwLjE3OTEzMjIgLTAuMDQwMTgsMC4yODI3NjM2IC0wLjA4NDY0OCwwLjMzNTM5OSAtMC4wNDQ0NjcsMC4wNTI2MzUgLTAuMTAyNjUwMSwwLjA4NDY0OCAtMC4yMzc5NzM1LDAuMDg0NjQ4IC0wLjExNjg2MDUsMCAtMC4xOTkxNDM1LC0wLjAzMDYyNyAtMC4yNzc5MDIxLC0wLjA5NDIzMSBoIC0wLjAwMTU5IEMgNy43NDE4MDkyLDcuMDY2NDgwNSA3LjY0Njc2NjEsNi45NTgwMjk5IDcuNTQ5OTkwMyw2LjgyOTY4MTEgbCAtMC4wMDQ4LC0wLjAwNjM5IEMgNy40NDE4NDA4LDYuNjc2MzI1NCA3LjMyNDIyNTcsNi41MzM2NDY1IDcuMTkzODI4Niw2LjM5NTI1OTUgbCAtMC4wMDQ4LC0wLjAwMzE5IEMgNy4wNTEzODE2LDYuMjMxMjkzOCA2Ljg4MjAzNCw2LjA5ODg2MDggNi42ODU5Mzg3LDUuOTk1OTc1MSA2LjQ3NTk0ODcsNS44NzQyMjE4IDYuMjI1MTI2OSw1LjgxNzA5NTYgNS45NDE2NzI0LDUuODE3MDk1NiBaIgogICBpZD0icGF0aDQiCiAgIHNvZGlwb2RpOm5vZGV0eXBlcz0ic3NzY2Nzc3NjY2NzY2NjY2Njc2NzY2Nzc3NjY2NjY2NjcyIKICAgaW5rc2NhcGU6bGFiZWw9In4iIC8+PHBhdGgKICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonSmV0QnJhaW5zIE1vbm8sIE5vcm1hbCc7ZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDowLjgxNzczNTstaW5rc2NhcGUtc3Ryb2tlOm5vbmUiCiAgIGQ9Im0gMTQuMDU4MzI4LDE0LjE4MjkwNCBjIDAuNDQyODY5LDAgMC44Mjk3NTgsLTAuMTQyOTg4IDEuMTEzMjA1LC0wLjQyNjQzNiAwLjI4MzQ0NywtMC4yODM0NDcgMC40MjQ4MzgsLTAuNjY4NzM4IDAuNDI0ODM4LC0xLjExMTYwOCBWIDExLjY2NTgxNCBIIDE0LjM4MDk1IHYgMC45NzkwNDYgYyAwLDAuMTc4NTQ2IC0wLjAzOTA0LDAuMjgwODk0IC0wLjA4NDY1LDAuMzMzODAyIC0wLjA0NTYxLDAuMDUyOTEgLTAuMTA3ODQxLDAuMDg0NjUgLTAuMjQ3NTU2LDAuMDg0NjUgLTAuMTE0MzY2LDAgLTAuMTg3NjM5LC0wLjAyNzg4IC0wLjI1ODczNiwtMC4wOTQyNCBsIC0wLjAwNDksLTAuMDA0OSAtMC4wMDY0LC0wLjAwNDkgYyAtMC4wOTc1NSwtMC4wNzkyNSAtMC4xOTI5NjYsLTAuMTgyNTc0IC0wLjI4NDI5MSwtMC4zMTMwMzkgLTAuMTA0MzA4LC0wLjE0OTAxIC0wLjIxOTI1NiwtMC4yOTc2ODkgLTAuMzQ0OTgyLC0wLjQ0NTYwMiBsIC0wLjAwMzIsLTAuMDA0OSAtMC4wMDMyLC0wLjAwMzIgQyAxMi45OTg3NTYsMTIuMDQwMzIzIDEyLjgyNzM3LDExLjkwOTE3MiAxMi42MzE5ODEsMTEuNzk5NzU0IGwgLTAuMDAzMiwtMC4wMDE3IC0wLjAwMzIsLTAuMDAxNyBjIC0wLjIxNTg2MywtMC4xMTIyNSAtMC40NzEwMiwtMC4xNjI5MDggLTAuNzYwMjM3LC0wLjE2MjkwOCAtMC40MzU2ODQsMCAtMC44MTY0MzQsMC4xNDI5MzcgLTEuMDkyNDQyLDAuNDI2NDM1IC0wLjI4MjQ3LDAuMjgzMzEyIC0wLjQyNDg0LDAuNjY5NTA1IC0wLjQyNDg0LDEuMTExNjA4IHYgMC45NzkwNDYgaCAxLjIxNTQyMiB2IC0wLjk3OTA0NiBjIDAsLTAuMTc5MTMyIDAuMDQwMTksLTAuMjgyNzYzIDAuMDg0NjUsLTAuMzM1Mzk5IDAuMDQ0NDcsLTAuMDUyNjQgMC4xMDI2NTEsLTAuMDg0NjUgMC4yMzc5NzQsLTAuMDg0NjUgMC4xMTY4NTksMCAwLjE5OTE0MywwLjAzMDYzIDAuMjc3OTAxLDAuMDk0MjMgaCAwLjAwMTcgYyAwLjA5MjQ3LDAuMDg3NDIgMC4xODc1MTUsMC4xOTU4NzEgMC4yODQyOTEsMC4zMjQyMTkgbCAwLjAwNDksMC4wMDY0IGMgMC4xMDMzNTQsMC4xNDY5NjYgMC4yMjA5NzMsMC4yODk2NDUgMC4zNTEzNzIsMC40MjgwMzIgbCAwLjAwNDksMC4wMDMyIGMgMC4xMzc2NTYsMC4xNjA3NzEgMC4zMDcwMDMsMC4yOTMyMDUgMC41MDMwOTgsMC4zOTYwOSAwLjIwOTk5LDAuMTIxNzUzIDAuNDYwODEyLDAuMTc4ODc5IDAuNzQ0MjY3LDAuMTc4ODc5IHoiCiAgIGlkPSJwYXRoMiIKICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3NjY3Nzc2NjY3NjY2NjY2NzY3NjY3Nzc2NjY2NjY2NjYyIgLz48L3N2Zz4K',
        graphIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwbW0iCiAgIGhlaWdodD0iMjBtbSIKICAgdmlld0JveD0iMCAwIDIwIDIwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImdyYXBoSWNvbi5zdmciCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgaWQ9Im5hbWVkdmlldzEiCiAgIHBhZ2Vjb2xvcj0iIzUwNTA1MCIKICAgYm9yZGVyY29sb3I9IiNlZWVlZWUiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjNTA1MDUwIgogICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgIGlua3NjYXBlOnpvb209IjguMDAwMDAwMiIKICAgaW5rc2NhcGU6Y3g9IjE4LjQzNzUiCiAgIGlua3NjYXBlOmN5PSIzOS4xODc0OTkiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAyNyIKICAgaW5rc2NhcGU6d2luZG93LXg9IjE5MTIiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMSIgLz4KICAgPGRlZnMKICAgaWQ9ImRlZnMxIiAvPgogICAKCjxwYXRoCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgZD0ibSA4Ljk5ODcwMjEsNC4xNjYzMzM1IGMgMCwwIDAuOTk2Mjg4MywxLjk3NTI2OTEgMS40OTA2NjM5LDIuOTY0NzM0OSBsIDAuMDcyNTMsLTAuMDg4ODQ5IGMgMC4xNDYyNTQsLTAuMTc5MTU2NSAwLjUwNzgsLTAuNTIyMTg1NiAwLjcwMzU5MywtMC42Njc1NTg3IDAuNTA3MDg4LC0wLjM3NjUwMzkgMS4wNjY5NDIsLTAuNjE1NzkxNSAxLjcwNTM1NywtMC43Mjg4ODcyIDAuMzQ3OTUyLC0wLjA2MTY0IDAuOTQ4MzQ0LC0wLjA2MTY0IDEuMjk2Mjk2LDAgMS4yNTIxOSwwLjIyMTgyNjggMi4yOTMyODEsMC45ODUzNDMyIDIuODYyNDgsMi4wOTkyOSAwLjIwMzQxMywwLjM5ODA4ODQgMC4zMzM2ODksMC44MTA1NjIzIDAuMzk2MzEyLDEuMjU0NzkzNiAwLjAzOTU3LDAuMjgwNzExNSAwLjAzOTU3LDAuNzkyOTgxMyAwLDEuMDczNjkzOSAtMC4yNjI5MDcsMS44NjQ5NzIgLTEuNzg3NTQzLDMuMjc3NzcgLTMuNjY5NjEzLDMuNDAwNDMzIGwgLTAuMTg4NTk4LDAuMDEyMjkgMC40OTc2OTksMC45OTQ4NzIgSCAzLjgzMTk2NzIgWiBtIDMuODAyNDIyOSw5LjIzNTQxODUgLTAuMjI4NzE0LC0wLjA2MjUyIEMgMTEuMjI1MDk3LDEyLjk3MDk0NCAxMC4xNTA1OTEsMTEuODgwMzQ2IDkuODA0NDU5NCwxMC41Mjk4MjkgOS43MTQ2MjM4LDEwLjE3OTMxNSA5LjY4MjA2MDIsOS45MTUwOTg0IDkuNjgyMDYwMiw5LjUzNjcwMzkgYyAwLC0wLjUxODg2OCAwLjA5MDU5OCwtMS4wMDU2MDgyIDAuMjcxMTkzNiwtMS40NTY5OTc4IGwgMC4wODMyMSwtMC4yMDc5Nzc5IEMgOS42ODkzMDE3LDcuMTg2NjcgOC45OTg2ODI1LDUuODE0NDgxNyA4Ljk5ODY4MjUsNS44MTQ0ODE3IEwgNS4wMzU2NzM2LDEzLjcyMTg4OSBoIDcuOTI2MzE0NCB6IG0gMS4xMzg4ODcsLTAuNjgwMTk1IGMgMS4xNDc1NDQsLTAuMTIwODc3IDIuMTQxODc2LC0wLjg0MjIxMiAyLjYwNjk4NiwtMS44OTEyMyAwLjEwNTE3MiwtMC4yMzcyMDYgMC4xOTk4MTEsLTAuNTYyNiAwLjIzNzU0OSwtMC44MTY3NTQgMC4wMzczMywtMC4yNTE0MDY2IDAuMDM3MzMsLTAuNzAyMzMyNCAwLC0wLjk1MzczODYgLTAuMTU0Mzk1LC0xLjAzOTc5ODggLTAuODM1MDY0LC0xLjk1NjgyNDUgLTEuNzkwMzgsLTIuNDEyMDczNiAtMC44NzE1MDksLTAuNDE1MzEyMSAtMS44Nzg4MzMsLTAuNDE1MzEyMSAtMi43NTAzNDMsMCAtMC42ODQ5MjIsMC4zMjYzOTUyIC0xLjI0NTYyNCwwLjkwMjQzODQgLTEuNTUyODMxLDEuNTk1MzE5OSAtMC4xMDUxNzEsMC4yMzcyMDY1IC0wLjE5OTgxMSwwLjU2MjYwMDIgLTAuMjM3NTQ5LDAuODE2NzUzNyAtMC4wMzczMywwLjI1MTQwNjIgLTAuMDM3MzMsMC43MDIzMzIgMCwwLjk1MzczODYgMC4xNTQzOTUsMS4wMzk3OTkgMC44MzUwNjUsMS45NTY4MjUgMS43OTAzOCwyLjQxMjA3NCAwLjUzMDkxMywwLjI1MzAwMyAxLjEyMjk2NywwLjM1NjI5IDEuNjk2MTg4LDAuMjk1OTEgeiIKICAgaWQ9InBhdGgyIgogICBzb2RpcG9kaTpub2RldHlwZXM9ImNjc3Nzc3NzY3NjY2NjY3Nzc3NjY2NjY3Nzc3Nzc3Nzc3NzIiAvPjwvc3ZnPgo=',
        baseIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjIwbW0iCiAgIGhlaWdodD0iMjBtbSIKICAgdmlld0JveD0iMCAwIDIwIDIwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImJhc2VJY29uLnN2ZyIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPHNvZGlwb2RpOm5hbWVkdmlldwogICBpZD0ibmFtZWR2aWV3MSIKICAgcGFnZWNvbG9yPSIjNTA1MDUwIgogICBib3JkZXJjb2xvcj0iI2VlZWVlZSIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBpbmtzY2FwZTpkZXNrY29sb3I9IiM1MDUwNTAiCiAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgaW5rc2NhcGU6em9vbT0iNy45OTk5OTk5IgogICBpbmtzY2FwZTpjeD0iNDAuNDM3NTAxIgogICBpbmtzY2FwZTpjeT0iMzcuNTYyNSIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDI3IgogICBpbmtzY2FwZTp3aW5kb3cteD0iMTkxMiIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcxIiAvPgogICA8ZGVmcwogICBpZD0iZGVmczEiIC8+CiAgIAoKPHBhdGgKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MS40NjM0OCIKICAgZD0iTSA5LjA3MDU3MDMsMTEuODI4NTA5IDkuMDYzNjkwMyw4LjMzOTQyMzMgNy4xOCw4LjMyNTE3MDMgOS45ODM3OSw0LjY4MyBsIDIuODM3NjU0LDMuNjI5MzIzOCAtMS45NDE4MjIsMC4wMjcxMDEgLTAuMDA2OSwzLjQ4OTA4NjIgLTAuMDA2OSwzLjQ4OTA4NiBIIDkuOTcxNjU4IDkuMDc3NDQ4NCBaIgogICBpZD0icGF0aDIiCiAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2MiIC8+PC9zdmc+Cg=='
    };

    const setting = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjI3MjA2IDIuNjgzNzdDOC40MDgxOCAyLjI3NTQzIDguNzkwMzIgMiA5LjIyMDc1IDJIMTAuNzc5MkMxMS4yMDk3IDIgMTEuNTkxOCAyLjI3NTQzIDExLjcyNzkgMi42ODM3N0wxMi4zMjE5IDQuNDY1OEMxMi43OTE0IDQuNjYzIDEzLjIzMDQgNC45MTgxOCAxMy42MzAyIDUuMjIyMzhMMTUuNDcyMSA0Ljg0NTQ3QzE1Ljg5MzggNC43NTkxNyAxNi4zMjM0IDQuOTUyNCAxNi41Mzg2IDUuMzI1MTZMMTcuMzE3OCA2LjY3NDg1QzE3LjUzMyA3LjA0NzYxIDE3LjQ4NTYgNy41MTYyNyAxNy4yIDcuODM4MzJMMTUuOTUyOSA5LjI0NDY4QzE1Ljk4NCA5LjQ5MjA4IDE2IDkuNzQ0MTcgMTYgMTBDMTYgMTAuMjU1OCAxNS45ODQgMTAuNTA3OSAxNS45NTI5IDEwLjc1NTNMMTcuMiAxMi4xNjE3QzE3LjQ4NTYgMTIuNDgzNyAxNy41MzMgMTIuOTUyNCAxNy4zMTc4IDEzLjMyNTJMMTYuNTM4NiAxNC42NzQ4QzE2LjMyMzQgMTUuMDQ3NiAxNS44OTM4IDE1LjI0MDggMTUuNDcyMSAxNS4xNTQ1TDEzLjYzMDIgMTQuNzc3NkMxMy4yMzA0IDE1LjA4MTggMTIuNzkxNCAxNS4zMzcgMTIuMzIxOSAxNS41MzQyTDExLjcyNzkgMTcuMzE2MkMxMS41OTE4IDE3LjcyNDYgMTEuMjA5NyAxOCAxMC43NzkyIDE4SDkuMjIwNzVDOC43OTAzMiAxOCA4LjQwODE4IDE3LjcyNDYgOC4yNzIwNiAxNy4zMTYyTDcuNjc4MDUgMTUuNTM0MkM3LjIwODYyIDE1LjMzNyA2Ljc2OTU1IDE1LjA4MTggNi4zNjk4MiAxNC43Nzc2TDQuNTI3OTIgMTUuMTU0NUM0LjEwNjIzIDE1LjI0MDggMy42NzY2MyAxNS4wNDc2IDMuNDYxNDEgMTQuNjc0OEwyLjY4MjE3IDEzLjMyNTJDMi40NjY5NiAxMi45NTI0IDIuNTE0NDIgMTIuNDgzNyAyLjggMTIuMTYxN0w0LjA0NzA4IDEwLjc1NTNDNC4wMTYgMTAuNTA3OSAzLjk5OTk5IDEwLjI1NTggMy45OTk5OSAxMEMzLjk5OTk5IDkuNzQ0MTYgNC4wMTYgOS40OTIwNyA0LjA0NzA3IDkuMjQ0NjZMMi44IDcuODM4MzJDMi41MTQ0MiA3LjUxNjI3IDIuNDY2OTYgNy4wNDc2MSAyLjY4MjE3IDYuNjc0ODVMMy40NjE0MSA1LjMyNTE2QzMuNjc2NjMgNC45NTI0IDQuMTA2MjMgNC43NTkxNyA0LjUyNzkyIDQuODQ1NDdMNi4zNjk4IDUuMjIyMzhDNi43Njk1NCA0LjkxODE4IDcuMjA4NjEgNC42NjMgNy42NzgwNSA0LjQ2NThMOC4yNzIwNiAyLjY4Mzc3Wk05Ljk5OTk5IDhDOC44OTU0MiA4IDcuOTk5OTkgOC44OTU0MyA3Ljk5OTk5IDEwQzcuOTk5OTkgMTEuMTA0NiA4Ljg5NTQyIDEyIDkuOTk5OTkgMTJDMTEuMTA0NiAxMiAxMiAxMS4xMDQ2IDEyIDEwQzEyIDguODk1NDMgMTEuMTA0NiA4IDkuOTk5OTkgOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=';;
    const close = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMzIiCiAgIGhlaWdodD0iMzIiCiAgIHZpZXdCb3g9IjAgMCA4LjQ2NjY2NjIgOC40NjY2NjYyIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9Iue7mOWbvi5zdmciCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXcxIgogICAgIHBhZ2Vjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOnpvb209IjE1LjUwMTI3MyIKICAgICBpbmtzY2FwZTpjeD0iMjAuNzQwMjMzIgogICAgIGlua3NjYXBlOmN5PSIxMC45OTkwOTciCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDAiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii0xMSIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTExIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiAvPjxkZWZzCiAgICAgaWQ9ImRlZnMxIj48c3R5bGUKICAgICAgIGlkPSJzdHlsZTEiPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+PC9kZWZzPjxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IuWbvuWxgiAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSI+PGcKICAgICAgIGlkPSJnMSIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMzM5NjkyNSwwLjMzOTY5MjUsLTAuMzM5NjkyNSwwLjMzOTY5MjUsNC4yMzM0NjU2LDEuNjkyNTY1NykiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0iZzEiPjxsaW5lCiAgICAgICAgIGNsYXNzPSJjbHMtMSIKICAgICAgICAgeDE9IjMuNzQiCiAgICAgICAgIHkxPSI2LjQ4IgogICAgICAgICB4Mj0iMy43NCIKICAgICAgICAgeTI9IjEiCiAgICAgICAgIGlkPSJsaW5lMSIgLz48bGluZQogICAgICAgICBjbGFzcz0iY2xzLTEiCiAgICAgICAgIHgxPSIxIgogICAgICAgICB5MT0iMy43NCIKICAgICAgICAgeDI9IjYuNDgiCiAgICAgICAgIHkyPSIzLjc0IgogICAgICAgICBpZD0ibGluZTIiIC8+PC9nPjwvZz48L3N2Zz4K';

    let addons = JSON.parse(localStorage.getItem('tw:addons')) || {};

    let customBlockText = addons['custom-block-text']
        ? {
            isEnabled: addons['custom-block-text'].enabled,
            isShadow: addons['custom-block-text'].shadow,
            isBold: addons['custom-block-text'].bold
        }
        : {
            isEnabled: false,
            isShadow: false,
            isBold: false
        };

    let rtlRoot = 'data:image/svg+xml;base64,'; {
        let svg_content = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
            <svg width="50mm" height="50mm" viewBox="0 0 50 50" version="1.1" id="svg1" inkscape:version="1.3.1 (91b66b0783, 2023-11-16)" sodipodi:docname="rtlRoot.svg"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <sodipodi:namedview id="namedview1" pagecolor="#6859ff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" inkscape:zoom="3.8753182" inkscape:cx="54.576164" inkscape:cy="108.50722" inkscape:window-width="1920" inkscape:window-height="1027" inkscape:window-x="1912" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg1" />
            <defs id="defs1" />
            ${customBlockText.isShadow && customBlockText.isEnabled ? '<path style="font-size:37.6908px;opacity:0.4;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:' + (customBlockText.isBold && customBlockText.isEnabled ? '2' : '0.8') + ';stroke-dasharray:none;stroke-opacity:1" d="M 16.758463,12.116668 H 45.383332 V 12.92278 H 18.149401 L 8.9344399,42.733106 4.1451872,33.644593 1.5529852,38.781578 0.38333326,37.627733 4.5245342,29.392748 8.9028259,37.548703 Z" id="text1" aria-label="root" sodipodi:nodetypes="ccccccccccc" inkscape:label="shadow" />' : ''}
            <path style="font-size:37.6908px;opacity:1;fill:${getBlockColor() === 'highContrast' ? '#000000' : '#ffffff'};stroke:${getBlockColor() === 'highContrast' ? '#000000' : '#ffffff'};stroke-width:${customBlockText.isBold && customBlockText.isEnabled ? '2' : '0.8'};stroke-dasharray:none;stroke-opacity:1" d="m 18.875263,10 h 28.624869 v 0.806112 H 20.266201 l -9.214962,29.810326 -4.7892533,-9.088513 -2.592202,5.136985 -1.169652,-1.153845 4.141201,-8.234985 4.3782923,8.155955 z" id="text1-9" aria-label="root" sodipodi:nodetypes="ccccccccccc" inkscape:label="root" />
            </svg>
        `;
        rtlRoot += btoa(svg_content);
    }

    let blockPaletteIcons = addons['block-palette-icons'] ? addons['block-palette-icons'].enabled : false;

    const getDarkMode = () => {
        try {
            let theme = JSON.parse(localStorage.getItem('tw:theme'));
            return theme.gui === 'dark';
        }
        catch (error) {
            return localStorage.getItem('tw:theme') === 'dark'; // 兼容旧版本 TW
        }
    };

    const rtlLang = ['ar', 'fa', 'he', 'ckb'];
    let isRTL = rtlLang.includes(localStorage.getItem('tw:language'));
    let isDark = getDarkMode();

    let mask = document.createElement('div');
    mask.style.position = 'fixed';
    mask.style.top = '0';
    mask.style.left = '0';
    mask.style.width = '100vw';
    mask.style.height = '100vh';
    mask.style.backgroundColor = isDark ? '#333333AA' : '#8c81ffe6';
    mask.style.zIndex = '998';
    mask.style.display = 'none';
    document.body.appendChild(mask);

    mask.addEventListener('click', (event) => {
        if (!settingWindow.contains(event.target)) {
            hideWindow();
        }
    });

    let settingWindow = document.createElement('div');
    settingWindow.style.position = 'fixed';
    settingWindow.style.transform = 'translate(-50%, -50%)';
    settingWindow.style.width = '480px';
    settingWindow.style.height = '500px';
    settingWindow.style.top = `calc(${settingWindow.style.height} / 2 + 100px + 6px)`;
    settingWindow.style.left = '50%';
    settingWindow.style.overflow = 'hidden';
    settingWindow.style.overflowX = 'hidden';
    settingWindow.style.backgroundColor = isDark ? '#111111' : '#FFFFFF';
    settingWindow.style.borderRadius = '5px';
    settingWindow.style.display = 'none';
    settingWindow.style.paddingBottom = '5px';
    settingWindow.style.zIndex = '999';
    settingWindow.style.boxShadow = '0 0 0 4px rgba(255, 255, 255, 0.2)';
    settingWindow.style.userSelect = 'none';
    document.body.appendChild(settingWindow);

    let windowContent = document.createElement('div');
    windowContent.style.position = 'absolute';
    windowContent.style.top = '50px';
    windowContent.style.width = 'calc(100% - 44px)';
    windowContent.style.height = 'auto';
    windowContent.style.padding = '22px';
    settingWindow.appendChild(windowContent);

    let titleBar = document.createElement('div');
    titleBar.style.height = '50px';
    titleBar.style.backgroundColor = '#594CD9';
    titleBar.style.color = '#fff';
    titleBar.style.lineHeight = '50px';
    titleBar.style.maxHeight = '50px';
    titleBar.style.fontSize = '16px';
    titleBar.style.top = '0';
    settingWindow.appendChild(titleBar);

    let titleText = document.createElement('div');
    titleText.style.display = 'flex';
    titleText.style.justifyContent = 'center';
    titleText.style.alignItems = 'center';
    titleBar.appendChild(titleText);

    let textLabel = document.createElement('div');
    textLabel.innerText = formatMessage({ id: 'OPERATION_SETTING', default: 'Setting' });
    textLabel.style.position = 'absolute';
    textLabel.style.top = '0px';
    textLabel.style.fontSize = '12px';
    textLabel.style.display = 'flex';
    textLabel.style.alignItems = 'center';
    titleBar.appendChild(textLabel);

    let settingIcon = document.createElement('img');
    settingIcon.src = setting;
    settingIcon.style.width = '24px';
    settingIcon.style.height = '24px';
    settingIcon.style.marginLeft = '12px';
    settingIcon.style.marginRight = '12px';
    textLabel.insertBefore(settingIcon, textLabel.firstChild);

    let closeButton = document.createElement('div');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '9px';
    closeButton.style.width = '32px';
    closeButton.style.height = '32px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.backgroundColor = isDark ? '#FFFFFF26' : '#00000026';
    closeButton.style.borderRadius = '50%';
    closeButton.style.transition = 'all 0.2s ease';
    titleBar.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        hideWindow();
    });

    let closeIcon = document.createElement('img');
    closeIcon.src = close;
    closeIcon.style.width = '100%';
    closeIcon.style.height = '100%';
    closeButton.appendChild(closeIcon);

    closeButton.onmouseover = function () {
        this.style.width = '40px';
        this.style.height = '40px';
        this.style.top = '5px';
        if (isRTL) {
            closeButton.style.left = '10px';
            closeButton.style.right = 'auto';
        } else {
            closeButton.style.right = '10px';
            closeButton.style.left = 'auto';
        }
    }

    closeButton.onmouseout = function () {
        this.style.width = '32px';
        this.style.height = '32px';
        this.style.top = '9px';
        if (isRTL) {
            closeButton.style.left = '14px';
            closeButton.style.right = 'auto';
        } else {
            closeButton.style.right = '14px';
            closeButton.style.left = 'auto';
        }
    };

    const newOption = ({ text, buttonText, runCode, icon }) => {
        let optionDiv = document.createElement('div');
        optionDiv.style.display = 'flex';
        optionDiv.style.alignItems = 'center';

        if (icon) {
            let iconBorder = document.createElement('div');
            iconBorder.style.display = 'flex';
            iconBorder.style.justifyContent = 'center';
            iconBorder.style.alignItems = 'center';
            iconBorder.style.width = '20px';
            iconBorder.style.height = '20px';
            iconBorder.style.borderRadius = '10px';
            iconBorder.style.backgroundImage = `url(${typeIcons.emptyIcon[getBlockColor()]})`;
            iconBorder.style.backgroundSize = 'cover';
            if (isRTL) {
                iconBorder.style.marginLeft = '8px';
                iconBorder.style.marginRight = '0';
            } else {
                iconBorder.style.marginLeft = '0';
                iconBorder.style.marginRight = '8px';
            }
            optionDiv.appendChild(iconBorder);

            let optionIcon = document.createElement('div');
            optionIcon.style.width = '20px';
            optionIcon.style.height = '20px';
            optionIcon.style.borderRadius = '10px';
            optionIcon.style.backgroundImage = `url(${icon})`;
            optionIcon.style.backgroundSize = 'cover';
            iconBorder.appendChild(optionIcon);
        }

        let optionSpan = document.createElement('span');
        optionSpan.innerText = (text ?? '') + '：';
        optionDiv.appendChild(optionSpan);

        let optionButton = document.createElement('button');
        optionButton.style.margin = '4px';
        optionButton.style.padding = '9.6px 12px';
        optionButton.style.borderRadius = '8px';
        optionButton.style.backgroundColor = '#6859FF';
        optionButton.style.color = '#FFFFFF';
        optionButton.style.fontWeight = '700';
        optionButton.style.fontSize = '14px';
        optionButton.style.border = 'none';
        optionButton.innerText = buttonText ?? '';
        optionButton.addEventListener('click', runCode)
        optionDiv.appendChild(optionButton);

        return optionDiv;
    };

    const showAndHideType = (type, style) => {
        HideBlockType[type] = style;
        vm.extensionManager.refreshBlocks();
        updateButton()
    };

    const updateButton = () => {
        const show = formatMessage({ id: 'OPERATION.SHOW', default: 'Show' });
        const hide = formatMessage({ id: 'OPERATION.HIDE', default: 'Hide' });
        const expand = '+ ' + formatMessage({ id: 'OPERATION.EXPAND', default: 'Expand' });
        const collapse = '- ' + formatMessage({ id: 'OPERATION.COLLAPSE', default: 'Collapse' });
        const rareBlock = formatMessage({ id: 'OPERATION.RARE_BLOCK', default: 'Rare block' });
        const expandMenu = formatMessage({ id: 'OPERATION.EXPAND_MENU', default: 'expand menu' });
        const mathBlock = formatMessage({ id: 'OPERATION.MATH_LABEL', default: 'Math' });
        const booleanBlock = formatMessage({ id: 'OPERATION.BOOLEAN_LABEL', default: 'Boolean' });
        const stringBlock = formatMessage({ id: 'OPERATION.STRING_LABEL', default: 'String' });
        const splitBlock = formatMessage({ id: 'OPERATION.SPLIT_LABEL', default: 'Split' });
        const graphBlock = formatMessage({ id: 'OPERATION.GRAPH_LABEL', default: 'Graph' });
        const baseBlock = formatMessage({ id: 'OPERATION.BASE_LABEL', default: 'Base' });

        const br = document.createElement('br');

        while (windowContent.firstChild) {
            windowContent.removeChild(windowContent.firstChild);
        }

        windowContent.appendChild(newOption({
            text: rareBlock,
            buttonText: HideBlockType.rareBlock ? show : hide,
            runCode: (() => {
                showAndHideType('rareBlock', !HideBlockType.rareBlock);
            })
        }));

        if ((!HideBlockType.rareBlock) || (!HideBlockType.expandMenu)) {
            windowContent.appendChild(newOption({
                text: expandMenu,
                buttonText: HideBlockType.expandMenu ? expand : collapse,
                runCode: (() => {
                    showAndHideType('expandMenu', !HideBlockType.expandMenu);
                })
            }));
        }

        windowContent.appendChild(br);

        windowContent.appendChild(newOption({
            text: mathBlock,
            buttonText: HideBlockType.math ? expand : collapse,
            icon: typeIcons.mathIcon,
            runCode: (() => {
                showAndHideType('math', !HideBlockType.math);
            })
        }));

        windowContent.appendChild(newOption({
            text: booleanBlock,
            buttonText: HideBlockType.bool ? expand : collapse,
            icon: typeIcons.booleanIcon,
            runCode: (() => {
                showAndHideType('bool', !HideBlockType.bool);
            })
        }));

        windowContent.appendChild(newOption({
            text: stringBlock,
            buttonText: HideBlockType.string ? expand : collapse,
            icon: typeIcons.stringIcon,
            runCode: (() => {
                showAndHideType('string', !HideBlockType.string);
            })
        }));

        windowContent.appendChild(newOption({
            text: splitBlock,
            buttonText: HideBlockType.split ? expand : collapse,
            icon: typeIcons.splitIcon,
            runCode: (() => {
                showAndHideType('split', !HideBlockType.split);
            })
        }));

        windowContent.appendChild(newOption({
            text: graphBlock,
            buttonText: HideBlockType.graph ? expand : collapse,
            icon: typeIcons.graphIcon,
            runCode: (() => {
                showAndHideType('graph', !HideBlockType.graph);
            })
        }));

        windowContent.appendChild(newOption({
            text: baseBlock,
            buttonText: HideBlockType.base ? expand : collapse,
            icon: typeIcons.baseIcon,
            runCode: (() => {
                showAndHideType('base', !HideBlockType.base);
            })
        }));
    };

    const setRTL = () => {
        isRTL = rtlLang.includes(localStorage.getItem('tw:language'));
        if (isRTL) {
            settingWindow.style.direction = 'rtl';
        } else {
            settingWindow.style.direction = 'ltr';
        }
        if (isRTL) {
            closeButton.style.left = '14px';
            closeButton.style.right = 'auto';
        } else {
            closeButton.style.right = '14px';
            closeButton.style.left = 'auto';
        }
    };

    const hideWindow = () => {
        settingWindow.style.display = 'none';
        mask.style.display = 'none';
    };

    const showWindow = () => {
        setRTL();
        updateButton();
        titleText.innerText = formatMessage({ id: 'OPERATION_EXT_NAME', default: 'Operation' });
        settingWindow.style.display = 'block';
        mask.style.display = 'block';
        isDark = getDarkMode();
        mask.style.backgroundColor = isDark ? '#333333AA' : '#8c81ffe6';
        settingWindow.style.backgroundColor = isDark ? '#111111' : '#FFFFFF';
        closeButton.style.backgroundColor = isDark ? '#FFFFFF26' : '#00000026';
        windowContent.style.color = isDark ? '#EEEEEE' : '#575E75';
    };

    let HideBlockType = {
        math: false,
        bool: false,
        string: false,
        split: true,
        graph: true,
        base: true,
        rareBlock: true,
        expandMenu: true
    };

    const sep = (hide) => [
        {
            blockType: BlockType.XML,
            xml: `<sep gap="36"/>`,
            hideFromPalette: hide
        }
    ];

    const negSep = (hide) => [
        {
            blockType: BlockType.XML,
            xml: `<sep gap="-12"/>`,
            hideFromPalette: hide
        }
    ];

    const rareHideAndSow = (type) => HideBlockType[type] || HideBlockType.rareBlock;

    const expandMenuHideAndSow = (type) => HideBlockType[type] || HideBlockType.expandMenu;

    const allCompare = (hide) => [
        ...sep(expandMenuHideAndSow('bool')),
        {
            opcode: 'trueBlock',
            blockType: BlockType.BOOLEAN,
            disableMonitor: true,
            text: formatMessage({
                id: 'OPERATION.TRUE',
                default: 'true'
            }),
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'falseBlock',
            blockType: BlockType.BOOLEAN,
            disableMonitor: true,
            text: formatMessage({
                id: 'OPERATION.FALSE',
                default: 'false'
            }),
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        {
            opcode: 'strictlyEqualBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≡ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.STRING,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.STRING,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'greaterOrEqualBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≥ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.STRING,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.STRING,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'lessOrEqualBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≤ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.STRING,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.STRING,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'unequalBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≠ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.STRING,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.STRING,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'strictlyUnequalBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≢ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.STRING,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.STRING,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'equalNegativeBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] =- [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'EqualPONBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] =± [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'approximatelyEqualBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≈ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'verticalBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ⊥ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.ANGLE,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.ANGLE,
                    defaultValue: '90'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'parallelBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ∥ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.ANGLE,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.ANGLE,
                    defaultValue: '90'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        {
            opcode: 'nandBlock',
            blockType: BlockType.BOOLEAN,
            text: `[OPERAND1] ${formatMessage({ id: 'OPERATION.NAND', default: 'nand' })} [OPERAND2]`,
            arguments: {
                OPERAND1: {
                    type: ArgumentType.BOOLEAN
                },
                OPERAND2: {
                    type: ArgumentType.BOOLEAN
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool') || hide
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'norBlock',
            blockType: BlockType.BOOLEAN,
            text: `[OPERAND1] ${formatMessage({ id: 'OPERATION.NOR', default: 'nor' })} [OPERAND2]`,
            arguments: {
                OPERAND1: {
                    type: ArgumentType.BOOLEAN
                },
                OPERAND2: {
                    type: ArgumentType.BOOLEAN
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool') || hide
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'xorBlock',
            blockType: BlockType.BOOLEAN,
            text: `[OPERAND1] ${formatMessage({ id: 'OPERATION.XOR', default: 'xor' })} [OPERAND2]`,
            arguments: {
                OPERAND1: {
                    type: ArgumentType.BOOLEAN
                },
                OPERAND2: {
                    type: ArgumentType.BOOLEAN
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool') || hide
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'xnorBlock',
            blockType: BlockType.BOOLEAN,
            text: `[OPERAND1] ${formatMessage({ id: 'OPERATION.XNOR', default: 'xnor' })} [OPERAND2]`,
            arguments: {
                OPERAND1: {
                    type: ArgumentType.BOOLEAN
                },
                OPERAND2: {
                    type: ArgumentType.BOOLEAN
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool') || hide
        }
    ];

    const allBitwise = (isRTL) => [
        ...sep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseAndBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1] & [NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        },
        ...negSep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseOrBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1] | [NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        },
        ...negSep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseXorBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1] ^ [NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        },
        ...negSep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseLeftShiftBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1]' + (!isRTL ? '<<' : '>>') + '[NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        },
        ...negSep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseRightShiftBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1]' + (!isRTL ? '>>' : '<<') + '[NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        },
        ...negSep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseLogicalRightShiftBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1]' + (!isRTL ? '>>>' : '<<<') + '[NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        }
    ];

    const getInfo = () => ({
        color1: '#6859ff',
        color2: '#5E50E6',
        color3: '#5347CC',
        menuIconURI: blockPaletteIcons ? typeIcons.operatorsIcon[getBlockColor()] : undefined,
        id: 'OPERATION',
        name: formatMessage({
            id: 'OPERATION_EXT_NAME',
            default: 'Operators'
        }),
        blocks: descriptor(formatMessage, isRTL),
        menus: menus(formatMessage, isRTL)
    });

    const descriptor = (formatMessage) => {
        return [
            {
                func: 'openSettingWindow',
                blockType: BlockType.BUTTON,
                text: formatMessage({
                    id: 'OPERATION_SETTING',
                    default: 'Setting'
                }),
            },
            {
                opcode: 'exponent',
                blockType: BlockType.REPORTER,
                text: '[NUM1] 🠕 [NUM2]',
                arguments: {
                    NUM1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    NUM2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            {
                opcode: 'root',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.ROOT',
                    default: '[NUM1] √ [NUM2]'
                }),
                arguments: {
                    NUM1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    NUM2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    RTL_ROOT: {
                        type: ArgumentType.IMAGE,
                        dataURI: rtlRoot,
                        flipRTL: true
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            {
                opcode: 'negative',
                blockType: BlockType.REPORTER,
                text: '- [NUM]',
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            ...sep(HideBlockType.math),
            {
                opcode: 'constrain',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CONSTRAIN',
                    default: 'constrain [NUM] low [LOW] high [HIGH]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '50'
                    },
                    LOW: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    },
                    HIGH: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            {
                opcode: 'loopNum',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.LOOP_NUMBER',
                    default: '[NUM] loop in [START] to [END]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    },
                    START: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    },
                    END: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '4'
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            {
                opcode: 'round',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.ROUND',
                    default: 'round [NUM1] to [NUM2] decimal places'
                }),
                arguments: {
                    NUM1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '3.14'
                    },
                    NUM2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    },
                },
                hideFromPalette: HideBlockType.math
            },
            {
                opcode: 'mapOff',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.MAP_OFF',
                    default: 'map [NUM] from [START1] ~ [END1] to [START2] ~ [END2]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    START1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    END1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    },
                    START2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    END2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1000'
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            ...sep(rareHideAndSow('math')),
            {
                opcode: 'atan2Block',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.ATAN2',
                    default: '𝒂𝒕𝒂𝒏𝟐 [NUM1] ÷ [NUM2]'
                }),
                arguments: {
                    NUM1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    NUM2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            {
                opcode: 'logWithBase',
                blockType: BlockType.REPORTER,
                text: '𝑳𝒐𝒈 🠗 [BASE] : [NUM]',
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    BASE: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            {
                opcode: 'factorial',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.FACTORIAL',
                    default: 'factorial [NUM]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            ...sep(rareHideAndSow('math')),
            {
                opcode: 'cubeRoot',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CUBE_ROOT',
                    default: '∛ [NUM]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            {
                opcode: 'toPercent',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TO_PERCENT',
                    default: '[NUM] %'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            ...sep(rareHideAndSow('math')),
            {
                opcode: 'percentOf',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.PERCENT_OF',
                    default: '[NUM1] % of [NUM2]'
                }),
                arguments: {
                    NUM1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    NUM2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            {
                opcode: 'calculate',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CALCULATE',
                    default: 'calculate [TEXT]'
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue: '√16 + π + abs(-1) (-1)'
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            ...sep(rareHideAndSow('math')),
            {
                opcode: 'findPartition',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.FIND_PARTITION',
                    default: 'find partition of [VALUE] in range [RANGE_START] to [RANGE_END] divided into [NUM_PARTITIONS] partitions'
                }),
                arguments: {
                    VALUE: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 10
                    },
                    RANGE_START: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 1
                    },
                    RANGE_END: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 20
                    },
                    NUM_PARTITIONS: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 10
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'OPERATION.BOOLEAN_LABEL',
                    default: 'Boolean'
                }),
                hideFromPalette: HideBlockType.bool
            },
            {
                opcode: 'booleanMenu',
                blockType: BlockType.BOOLEAN,
                disableMonitor: true,
                text: '[BOOLEAN]',
                arguments: {
                    BOOLEAN: {
                        type: ArgumentType.STRING,
                        menu: 'BOOLEAN_MENU'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            {
                opcode: 'probability',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'OPERATION.RANDOM',
                    default: 'random'
                }) + ': [NUM] %',
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '50'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            ...sep(HideBlockType.bool),
            {
                opcode: 'isTrue',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'OPERATION.IS_TRUE',
                    default: '[OPERAND] is true?'
                }),
                arguments: {
                    OPERAND: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            {
                opcode: 'checkType',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'OPERATION.CHECK_TYPE',
                    default: '[INPUT] is [MODE] ?'
                }),
                arguments: {
                    INPUT: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'CHECK_TYPE',
                        defaultValue: 'number'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            ...sep(HideBlockType.bool),
            {
                opcode: 'compare',
                blockType: BlockType.BOOLEAN,
                text: '[OPERAND1] [SYMBOL] [OPERAND2]',
                arguments: {
                    OPERAND1: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    },
                    OPERAND2: {
                        type: ArgumentType.STRING,
                        defaultValue: '50'
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        menu: 'EQUAL_SYMBOL',
                        defaultValue: 'unequal'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            {
                opcode: 'continuousCompare',
                blockType: BlockType.BOOLEAN,
                text: '[OPERAND1] [SYMBOL1] [OPERAND2] [SYMBOL2] [OPERAND3]',
                arguments: {
                    OPERAND1: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    },
                    OPERAND2: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    },
                    OPERAND3: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    },
                    SYMBOL1: {
                        type: ArgumentType.STRING,
                        menu: 'EQUAL_SYMBOL',
                        defaultValue: 'lessOrEqual'
                    },
                    SYMBOL2: {
                        type: ArgumentType.STRING,
                        menu: 'EQUAL_SYMBOL',
                        defaultValue: 'lessOrEqual'
                    }
                },
                hideFromPalette: rareHideAndSow('bool')
            },
            {
                opcode: 'approximatelyEqual',
                blockType: BlockType.BOOLEAN,
                text: '[OPERAND1] ≈ [OPERAND2] ± [NUM]',
                arguments: {
                    OPERAND1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '5'
                    },
                    OPERAND2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '6'
                    },
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            ...sep(rareHideAndSow('bool')),
            {
                opcode: 'logicGateOperation',
                blockType: BlockType.BOOLEAN,
                text: '[OPERAND1] [SYMBOL] [OPERAND2]',
                arguments: {
                    OPERAND1: {
                        type: ArgumentType.BOOLEAN
                    },
                    OPERAND2: {
                        type: ArgumentType.BOOLEAN
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        menu: 'LOGIC_GATE_SYMBOL'
                    }
                },
                hideFromPalette: rareHideAndSow('bool')
            },
            ...sep(HideBlockType.bool),
            {
                opcode: 'isBetween',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'OPERATION.IS_BETWEEN',
                    default: 'is [NUM] between [START] and [END] ?'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '5'
                    },
                    START: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    },
                    END: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            ...allCompare(rareHideAndSow('bool')),
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'OPERATION.STRING_LABEL',
                    default: 'String'
                }),
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'text',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TEXT',
                    default: 'text [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        })
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'test',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TEST',
                    default: 'test [BOOLEAN] true: [STRING1] false: [STRING2]'
                }),
                arguments: {
                    BOOLEAN: {
                        type: ArgumentType.BOOLEAN
                    },
                    STRING1: {
                        type: ArgumentType.STRING,
                        defaultValue: 'a'
                    },
                    STRING2: {
                        type: ArgumentType.STRING,
                        defaultValue: 'b'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            ...sep(HideBlockType.string),
            {
                opcode: 'repeat',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.REPEAT',
                    default: 'repeat [STRING] [NUMBER] times'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + ' '
                    },
                    NUMBER: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '3'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'trim',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TRIM',
                    default: 'trim whitespace from [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: '     ' + formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + '     '
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'letters',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.INTERCEPT',
                    default: 'letters # [START] to [END] of [STRING]'
                }),
                arguments: {
                    START: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '3'
                    },
                    END: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '5'
                    },
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: 'abcdefg'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'remove',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.REMOVE',
                    default: 'remove # [START] to [END] of [STRING]'
                }),
                arguments: {
                    START: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '3'
                    },
                    END: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '5'
                    },
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: 'abcdefg'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'insert',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.INSERT',
                    default: 'insert [INSERT_STR] at [INDEX] of [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: 'ac'
                    },
                    INSERT_STR: {
                        type: ArgumentType.STRING,
                        defaultValue: 'b'
                    },
                    INDEX: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '2'
                    },
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'replace',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.REPLACE',
                    default: 'replace [STRING2] with [STRING3] in [STRING1]'
                }),
                arguments: {
                    STRING2: {
                        type: ArgumentType.STRING,
                        defaultValue: 'world'
                    },
                    STRING3: {
                        type: ArgumentType.STRING,
                        defaultValue: 'Scratch'
                    },
                    STRING1: {
                        type: ArgumentType.STRING,
                        defaultValue: 'Hello world!'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'replaceIndex',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.REPLACE_INDEX',
                    default: 'replace [STRING] from [START] to [END] with [REPLACEMENT]'
                }),
                arguments: {
                    START: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '7'
                    },
                    END: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '11'
                    },
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: 'Hello world!'
                    },
                    REPLACEMENT: {
                        type: ArgumentType.STRING,
                        defaultValue: 'Scratch'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            HideBlockType.split ? ({
                opcode: 'split',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.SPLIT',
                    default: 'split [STRING] by [SYMBOL], get # [NUM]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_BANANA',
                            default: 'banana'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_PEACH',
                            default: 'peach'
                        })
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        defaultValue: '/'
                    },
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '2'
                    }
                },
                hideFromPalette: HideBlockType.string
            }) : '',
            {
                opcode: 'toggleCase',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TOGGLE_CASE',
                    default: '[MODE] of [STRING2] in [STRING1]'
                }),
                arguments: {
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'TOGGLE_CASE_MODE'
                    },
                    STRING2: {
                        type: ArgumentType.STRING,
                        defaultValue: 'te'
                    },
                    STRING1: {
                        type: ArgumentType.STRING,
                        defaultValue: 'The text test'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'convert',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CONVERT',
                    default: 'convert [STRING] to [MODE]'
                }),
                arguments: {
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'CONVERT_MODE'
                    },
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: 'apple banana'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            ...sep(HideBlockType.string),
            {
                opcode: 'join',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'OPERATION.JOIN',
                    default: 'join [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + ' '
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'getJoin',
                blockType: BlockType.REPORTER,
                disableMonitor: true,
                text: formatMessage({
                    id: 'OPERATION.GET_JOIN',
                    default: 'join value'
                }),
                hideFromPalette: HideBlockType.string
            },
            ...sep(rareHideAndSow('string')),
            {
                opcode: 'getUnicode',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.GET_TO_UNICODE',
                    default: 'unicode of [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: 'a'
                    }
                },
                hideFromPalette: rareHideAndSow('string')
            },
            {
                opcode: 'unicodeToString',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.UNICODE_TO_STRING',
                    default: 'character with Unicode [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '97'
                    }
                },
                hideFromPalette: rareHideAndSow('string')
            },
            ...sep(rareHideAndSow('string')),
            {
                opcode: 'shuffleString',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.SHUFFLE',
                    default: 'shuffle [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        })
                    }
                },
                hideFromPalette: rareHideAndSow('string')
            },
            ...sep(rareHideAndSow('string')),
            {
                opcode: 'overwrite',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.OVERWRITE',
                    default: 'overlay [ORIGINAL] with [OTHER], direction: [DIRECTION]'
                }),
                arguments: {
                    ORIGINAL: {
                        type: ArgumentType.STRING,
                        defaultValue: '1234567890'
                    },
                    OTHER: {
                        type: ArgumentType.STRING,
                        defaultValue: 'abcde'
                    },
                    DIRECTION: {
                        type: ArgumentType.STRING,
                        menu: 'OVERWRITE_DIRECTION'
                    }
                },
                hideFromPalette: rareHideAndSow('string')
            },
            {
                opcode: 'padString',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.PAD_STRING',
                    default: 'pad [ORIGINAL_STR] to [REQUIRED_LENGTH] with [CHAR_TO_ADD] at [POSITION]'
                }),
                arguments: {
                    ORIGINAL_STR: {
                        type: ArgumentType.STRING,
                        defaultValue: '123'
                    },
                    REQUIRED_LENGTH: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 5
                    },
                    CHAR_TO_ADD: {
                        type: ArgumentType.STRING,
                        defaultValue: '0'
                    },
                    POSITION: {
                        type: ArgumentType.STRING,
                        menu: 'POSITION'
                    }
                },
                hideFromPalette: rareHideAndSow('string')
            },
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'OPERATION.SPLIT_LABEL',
                    default: 'Split'
                }),
                hideFromPalette: HideBlockType.split
            },
            {
                opcode: 'split',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.SPLIT',
                    default: 'split [STRING] by [SYMBOL], get # [NUM]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_BANANA',
                            default: 'banana'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_PEACH',
                            default: 'peach'
                        })
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        defaultValue: '/'
                    },
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '2'
                    }
                },
                hideFromPalette: HideBlockType.split
            },
            {
                opcode: 'splitAndRemove',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.SPLIT_REMOVE',
                    default: 'split [STRING] by [SYMBOL], remove # [NUM]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_BANANA',
                            default: 'banana'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_PEACH',
                            default: 'peach'
                        })
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        defaultValue: '/'
                    },
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '2'
                    }
                },
                hideFromPalette: HideBlockType.split
            },
            {
                opcode: 'splitAndInsert',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.SPLIT_INSERT',
                    default: 'split [STRING] by [SYMBOL], insert # [INDEX] of [INSERT_STR]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_BANANA',
                            default: 'banana'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_PEACH',
                            default: 'peach'
                        })
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        defaultValue: '/'
                    },
                    INSERT_STR: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_MANGO',
                            default: 'mango'
                        })
                    },
                    INDEX: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '2'
                    }
                },
                hideFromPalette: HideBlockType.split
            },
            {
                opcode: 'splitAndReplace',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.SPLIT_REPLACE',
                    default: 'split [STRING] by [SYMBOL], replace # [INDEX] to [REPLACE_STR]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_BANANA',
                            default: 'banana'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_PEACH',
                            default: 'peach'
                        })
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        defaultValue: '/'
                    },
                    REPLACE_STR: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_MANGO',
                            default: 'mango'
                        })
                    },
                    INDEX: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '2'
                    }
                },
                hideFromPalette: HideBlockType.split
            },
            {
                opcode: 'splitAndShuffle',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.SPLIT_SHUFFLE',
                    default: 'split [STRING] by [SYMBOL], and shuffle'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_BANANA',
                            default: 'banana'
                        }) + '/' + formatMessage({
                            id: 'OPERATION.ARG_PEACH',
                            default: 'peach'
                        })
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        defaultValue: '/'
                    }
                },
                hideFromPalette: HideBlockType.split
            },
            {
                opcode: 'splitAndAnalysis',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.SPLIT_ANALYSIS',
                    default: 'split [STRING] by [SYMBOL], and get [MODE]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: '1, 2, 3, 4, 5'
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        defaultValue: ','
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'SPLIT_ANALYSIS_MODE'
                    }
                },
                hideFromPalette: HideBlockType.split
            },
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'OPERATION.GRAPH_LABEL',
                    default: 'Graph'
                }),
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'calculateLineLength',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CALCULATE_LINE_LENGTH',
                    default: 'length from ([X1],[Y1]) to ([X2],[Y2])'
                }),
                arguments: {
                    X1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    X2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    },
                    Y2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'calculateLineDirection',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CALCULATE_LINE_DIRECTION',
                    default: 'direction from ([X1],[Y1]) to ([X2],[Y2])'
                }),
                arguments: {
                    X1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    X2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    },
                    Y2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'calculateIntersection',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CALCULATE_INTERSECTION',
                    default: 'calculate intersection ([X1],[Y1]) to ([X2],[Y2]) & ([X3],[Y3]) to ([X4],[Y4])'
                }),
                arguments: {
                    X1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '-100'
                    },
                    Y1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    X2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    },
                    Y2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    X3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    },
                    X4: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y4: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '-100'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            ...sep(HideBlockType.graph),
            {
                opcode: 'triangle',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TRIANGLE',
                    default: 'triangle ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) \'s [MODE]'
                }),
                arguments: {
                    X1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    X2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    Y2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    X3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    Y3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'GRAPH_MODE'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'triangleArea',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TRIANGLE_AREA',
                    default: 'triangle [S1] [S2] [S3] \'s area'
                }),
                arguments: {
                    S1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '3'
                    },
                    S2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '4'
                    },
                    S3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '5'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'rectangle',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.RECTANGLE',
                    default: 'quadrangle ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) ([X4],[Y4]) \'s [MODE]'
                }),
                arguments: {
                    X1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    X2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    Y2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    X3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    Y3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    X4: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y4: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'GRAPH_MODE'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'graph',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.GRAPH',
                    default: 'graph [GRAPH] \'s [MODE]'
                }),
                arguments: {
                    GRAPH: {
                        type: ArgumentType.STRING,
                        defaultValue: '(0,0) (0,2) (2,4) (4,2) (4,0)'
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'GRAPH_MODE'
                    }
                },
                hideFromPalette: rareHideAndSow('graph')
            },
            ...sep(HideBlockType.graph),
            {
                opcode: 'circle',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CIRCLE',
                    default: 'circle of [UNITS] [LENGTH] \'s [MODE]'
                }),
                arguments: {
                    UNITS: {
                        type: ArgumentType.STRING,
                        menu: 'LENGTH_UNITS'
                    },
                    LENGTH: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'GRAPH_MODE'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            ...sep(HideBlockType.graph),
            {
                opcode: 'isAngleInRange',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'OPERATION.IS_ANGLE_IN_RANGE',
                    default: 'is ∠ [ANGLE1] between ∠ [ANGLE2] and ∠ [ANGLE3] in [MODE]?'
                }),
                arguments: {
                    ANGLE1: {
                        type: ArgumentType.ANGLE,
                        defaultValue: 45
                    },
                    ANGLE2: {
                        type: ArgumentType.ANGLE,
                        defaultValue: 0
                    },
                    ANGLE3: {
                        type: ArgumentType.ANGLE,
                        defaultValue: 90
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'ANGLE_MODE'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'calculateAngleDifference',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CALCULATE_ANGLE_DIFFERENCE',
                    default: 'angle from ∠ [ANGLE1] to ∠ [ANGLE2] in [MODE]'
                }),
                arguments: {
                    ANGLE1: {
                        type: ArgumentType.ANGLE,
                        defaultValue: 0
                    },
                    ANGLE2: {
                        type: ArgumentType.ANGLE,
                        defaultValue: 90
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'ANGLE_MODE'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'OPERATION.BASE_LABEL',
                    default: 'Base'
                }),
                hideFromPalette: HideBlockType.base
            },
            {
                opcode: 'base',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.BASE',
                    default: 'convert [NUM] in base [INTO1] to base [INTO2]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.STRING,
                        defaultValue: '10'
                    },
                    INTO1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    INTO2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '2'
                    }
                },
                hideFromPalette: HideBlockType.base
            },
            {
                opcode: 'toBin',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TO_BIN',
                    default: '[NUM]₁₀ → BIN'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    }
                },
                hideFromPalette: rareHideAndSow('base')
            },
            {
                opcode: 'toDec',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TO_DEC',
                    default: '[NUM]₂ → DEC'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1010'
                    }
                },
                hideFromPalette: rareHideAndSow('base')
            },
            ...sep(HideBlockType.base),
            {
                opcode: 'isBase',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'OPERATION.IS_BASE',
                    default: '[NUM] is base [BASE] ?'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.STRING,
                        defaultValue: 'FF'
                    },
                    BASE: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '16'
                    }
                },
                hideFromPalette: HideBlockType.base
            },
            ...sep(HideBlockType.base),
            {
                opcode: 'booleanToNumber',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.BOOLEAN_TO_NUMBER',
                    default: 'converts [BOOLEAN] to binary num'
                }),
                arguments: {
                    BOOLEAN: {
                        type: ArgumentType.BOOLEAN,
                    }
                },
                hideFromPalette: HideBlockType.base
            },
            {
                opcode: 'numberNot',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.NUMBER_NOT',
                    default: 'binary Inversion [NUM]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.base
            },
            ...sep(HideBlockType.base),
            {
                opcode: 'bitwiseBlock',
                blockType: BlockType.REPORTER,
                text: '[NUM1] [SYMBOL] [NUM2]',
                arguments: {
                    NUM1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    NUM2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    SYMBOL: {
                        type: ArgumentType.NUMBER,
                        menu: 'BITWISE_SYMBOL'
                    }
                },
                hideFromPalette: HideBlockType.base
            },
            {
                opcode: 'bitwiseNot',
                blockType: BlockType.REPORTER,
                text: '~ [NUM]',
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.base
            },
            ...allBitwise(isRTL),
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'OPERATION.CONSTANT_LABEL',
                    default: 'Constant'
                })
            },
            {
                opcode: 'getConstant',
                blockType: BlockType.REPORTER,
                disableMonitor: true,
                text: formatMessage({
                    id: 'OPERATION.GET_CONSTANT',
                    default: 'constant [OPTION]'
                }),
                arguments: {
                    OPTION: {
                        type: ArgumentType.STRING,
                        menu: 'CONSTANT'
                    }
                }
            }
        ];
    };

    const menus = (formatMessage, isRTL) => {
        return {
            BOOLEAN_MENU: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.TRUE',
                            default: 'true'
                        }),
                        value: 'true'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.FALSE',
                            default: 'false'
                        }),
                        value: 'false'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.RANDOM',
                            default: 'random'
                        }),
                        value: 'random'
                    }
                ]
            },
            EQUAL_SYMBOL: {
                acceptReporters: false,
                items: [
                    {
                        text: '=',
                        value: 'equal'
                    },
                    {
                        text: '≡',
                        value: 'strictlyEqual'
                    },
                    {
                        text: '>',
                        value: 'greater'
                    },
                    {
                        text: '<',
                        value: 'less'
                    },
                    {
                        text: '≥',
                        value: 'greaterOrEqual'
                    },
                    {
                        text: '≤',
                        value: 'lessOrEqual'
                    },
                    {
                        text: '≠',
                        value: 'unequal'
                    },
                    {
                        text: '≢',
                        value: 'strictlyUnequal'
                    },
                    {
                        text: '=-',
                        value: 'equalNegative'
                    },
                    {
                        text: '=±',
                        value: 'EqualPON'
                    },
                    {
                        text: '≈',
                        value: 'approximatelyEqual'
                    },
                    {
                        text: '⊥',
                        value: 'vertical'
                    },
                    {
                        text: '∥',
                        value: 'parallel'
                    }
                ]
            },
            LOGIC_GATE_SYMBOL: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.NAND',
                            default: 'nand'
                        }),
                        value: 'nand'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.NOR',
                            default: 'nor'
                        }),
                        value: 'nor'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.XOR',
                            default: 'xor'
                        }),
                        value: 'xor'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.XNOR',
                            default: 'xnor'
                        }),
                        value: 'xnor'
                    }
                ]
            },
            CHECK_TYPE: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_NUMBER',
                            default: 'number'
                        }),
                        value: 'number'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_POSITIVE_NUMBER',
                            default: 'positive number'
                        }),
                        value: 'positiveNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_NEGATIVE_NUMBER',
                            default: 'negative number'
                        }),
                        value: 'negativeNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_EVEN_NUMBER',
                            default: 'even number'
                        }),
                        value: 'evenNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_ODD_NUMBER',
                            default: 'odd number'
                        }),
                        value: 'oddNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_INTEGER_NUMBER',
                            default: 'integer number'
                        }),
                        value: 'integerNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_DECIMAL_NUMBER',
                            default: 'decimal number'
                        }),
                        value: 'decimalNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_PRIME_NUMBER',
                            default: 'prime number'
                        }),
                        value: 'primeNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_COMPOSITE_NUMBER',
                            default: 'composite number'
                        }),
                        value: 'compositeNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_TEXT',
                            default: 'text'
                        }),
                        value: 'text'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_BOOLEAN',
                            default: 'boolean'
                        }),
                        value: 'boolean'
                    }
                ]
            },
            OVERWRITE_DIRECTION: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.FRONT2BACK',
                            default: '→'
                        }),
                        value: 'f2b'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.BACK2FRONT',
                            default: '←'
                        }),
                        value: 'b2f'
                    }
                ]
            },
            POSITION: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.FRONT',
                            default: 'front'
                        }),
                        value: 'front'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.BACK',
                            default: 'back'
                        }),
                        value: 'back'
                    }
                ]
            },
            TOGGLE_CASE_MODE: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.FIRST_OCCURRENCE',
                            default: 'first occurrence'
                        }),
                        value: 'first'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.LAST_OCCURRENCE',
                            default: 'last occurrence'
                        }),
                        value: 'last'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.NUMBER_OF',
                            default: 'number'
                        }),
                        value: 'number'
                    }
                ]
            },
            CONVERT_MODE: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.UPPERCASE',
                            default: 'uppercase'
                        }),
                        value: 'uppercase'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.LOWERCASE',
                            default: 'lowercase'
                        }),
                        value: 'lowercase'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.CAPITALIZE',
                            default: 'capitalize the first letter'
                        }),
                        value: 'capitalize'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.REVERSE',
                            default: 'reverse'
                        }),
                        value: 'reverse'
                    }
                ]
            },
            SPLIT_ANALYSIS_MODE: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.MAX',
                            default: 'max'
                        }),
                        value: 'max'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.MIN',
                            default: 'min'
                        }),
                        value: 'min'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.MEAN',
                            default: 'mean'
                        }),
                        value: 'mean'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.SUM',
                            default: 'sum'
                        }),
                        value: 'sum'
                    },
                ]
            },
            GRAPH_MODE: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.AREA',
                            default: 'area'
                        }),
                        value: 'area'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.CIRCUMFERENCE',
                            default: 'circumference'
                        }),
                        value: 'circumference'
                    }
                ]
            },
            LENGTH_UNITS: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.RADIUS',
                            default: 'radius'
                        }),
                        value: 'radius'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.DIAMETER',
                            default: 'diameter'
                        }),
                        value: 'diameter'
                    }
                ]
            },
            ANGLE_MODE: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.INTERIOR_ANGLE',
                            default: 'interior'
                        }),
                        value: 'interiorAngle'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.EXTERIOR_ANGLE',
                            default: 'exterior'
                        }),
                        value: 'exteriorAngle'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.CLOCKWISE',
                            default: 'clockwise'
                        }),
                        value: 'clockwise'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.COUNTER_CLOCKWISE',
                            default: 'counter clockwise'
                        }),
                        value: 'counterClockwise'
                    }
                ]
            },
            BITWISE_SYMBOL: {
                acceptReporters: false,
                items: [
                    {
                        text: '&',
                        value: 'and'
                    },
                    {
                        text: '|',
                        value: 'or'
                    },
                    {
                        text: '^',
                        value: 'xor'
                    },
                    {
                        text: !isRTL ? '<<' : '>>',
                        value: 'leftShift'
                    },
                    {
                        text: !isRTL ? '>>' : '<<',
                        value: 'rightShift'
                    },
                    {
                        text: !isRTL ? '>>>' : '<<<',
                        value: 'logicalRightShift'
                    }
                ]
            },
            CONSTANT: {
                acceptReporters: false,
                items: [
                    {
                        text: '𝜋',
                        value: 'pi'
                    },
                    {
                        text: '𝜑',
                        value: 'phi'
                    },
                    {
                        text: '𝛾',
                        value: 'gamma'
                    },
                    {
                        text: '𝑒',
                        value: 'e'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.SQRT2',
                            default: '√2'
                        }),
                        value: 'sqrt2'
                    },
                    {
                        text: '∞',
                        value: 'Infinity'
                    },
                    {
                        text: '-∞',
                        value: '-Infinity'
                    },
                    {
                        text: '↵',
                        value: 'newLine'
                    }
                ]
            }
        };
    };

    class Operation {
        getInfo() {
            return getInfo();
        }

        openSettingWindow() {
            showWindow();
        }

        exponent({ NUM1, NUM2 }) {
            return Cast.toNumber(NUM1) ** Cast.toNumber(NUM2);
        }

        root({ NUM1, NUM2 }) {
            return Math.pow(Cast.toNumber(NUM2), 1 / Cast.toNumber(NUM1));
        }

        negative({ NUM }) {
            return 0 - Cast.toNumber(NUM);
        }

        constrain({ NUM, LOW, HIGH }) {
            const low = Math.min(Cast.toNumber(LOW), Cast.toNumber(HIGH));
            const high = Math.max(Cast.toNumber(LOW), Cast.toNumber(HIGH));
            return Math.min(Math.max(NUM, low), high);
        }

        loopNum({ NUM, START, END }) {
            let num = Cast.toNumber(NUM);
            let start = Math.min(Cast.toNumber(START), Cast.toNumber(END));
            let end = Math.max(Cast.toNumber(START), Cast.toNumber(END));
            let range_num = end - start + 1;
            let result = ((num - start) % range_num + range_num) % range_num + start;
            if (result > end) {
                result -= range_num;
            }
            return result;
        }

        round({ NUM1, NUM2 }) {
            return Cast.toNumber(NUM1).toFixed(Cast.toNumber(NUM2));
        }

        mapOff({ NUM, START1, END1, START2, END2 }) {
            NUM = Cast.toNumber(NUM);
            START1 = Cast.toNumber(START1);
            END1 = Cast.toNumber(END1);
            START2 = Cast.toNumber(START2);
            END2 = Cast.toNumber(END2);
            return ((NUM - START1) / (END1 - START1)) * (END2 - START2) + START2;
        }

        atan2Block({ NUM1, NUM2 }) {
            const num1 = Cast.toNumber(NUM1);
            const num2 = Cast.toNumber(NUM2);
            return Math.atan2(num1, num2) * 180 / Math.PI;
        }

        logWithBase({ NUM, BASE }) {
            const num = Cast.toNumber(NUM);
            const base = Cast.toNumber(BASE);
            return Math.log(num) / Math.log(base);
        }

        factorial({ NUM }) {
            let num = Cast.toNumber(NUM);
            if (num < 0 || !Number.isInteger(num)) return NaN;
            if (num > 170) return Infinity;
            if (num === 0) return 1;
            let r = 1;
            for (; num > 1; num--) r *= num;
            return r;
        }

        cubeRoot({ NUM }) {
            return Math.pow(Cast.toNumber(NUM), 1 / 3);
        }

        toPercent({ NUM }) {
            return Cast.toNumber(NUM) / 100;
        }

        percentOf({ NUM1, NUM2 }) {
            return (
                Cast.toNumber(NUM2) / 100
            ) * NUM1;
        }

        calculate({ TEXT }) {
            let expression = String(TEXT);

            let stack = []; // 存储运算符
            let postfix = []; // 存储数字

            // 运算符优先级与几元运算符
            let operators = {
                '(': {
                    precedence: 0,
                },
                '+': {
                    precedence: 1,
                    arity: 2,
                    code: ((x, y) => stack.push(x + y))
                },
                '-': {
                    precedence: 1,
                    arity: 2,
                    code: ((x, y) => stack.push(x - y))
                },
                '*': {
                    precedence: 2,
                    arity: 2,
                    code: ((x, y) => stack.push(x * y))
                },
                '·': {
                    precedence: 2,
                    arity: 2,
                    code: ((x, y) => stack.push(x * y))
                },
                '×': {
                    precedence: 2,
                    arity: 2,
                    code: ((x, y) => stack.push(x * y))
                },
                '/': {
                    precedence: 2,
                    arity: 2,
                    code: ((x, y) => stack.push(x / y))
                },
                '÷': {
                    precedence: 2,
                    arity: 2,
                    code: ((x, y) => stack.push(x / y))
                },
                '√': {
                    precedence: 3,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.sqrt(y)))
                },
                '∛': {
                    precedence: 3,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.cbrt(y)))
                },
                '∜': {
                    precedence: 3,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.pow(y, 0.25)))
                },
                '^': {
                    precedence: 4,
                    arity: 2,
                    code: ((x, y) => stack.push(Math.pow(x, y)))
                },
                'sin': {
                    precedence: 5,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.sin(y * Math.PI / 180)))
                },
                'cos': {
                    precedence: 5,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.cos(y * Math.PI / 180)))
                },
                'tan': {
                    precedence: 5,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.tan(y * Math.PI / 180)))
                },
                'asin': {
                    precedence: 5,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.asin(y) * 180 / Math.PI))
                },
                'acos': {
                    precedence: 5,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.acos(y) * 180 / Math.PI))
                },
                'atan': {
                    precedence: 5,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.atan(y) * 180 / Math.PI))
                },
                'atan_xy': {
                    // 往往要和 “,” 一起使用，格式是 “atan_xy num1 , num2”，
                    // 原理是 “,” 仅仅可以将两个数分开，把 num1 和 num2 都添加进去，这时运算数栈就有两个数了（[num1, num2]），然后 atan_xy 就可以对后两个数字进行操作了
                    precedence: 5,
                    arity: 2,
                    code: ((y, x) => stack.push(Math.atan2(y, x) * 180 / Math.PI))
                },
                'log': {
                    precedence: 5,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.log(y) / Math.LN10))
                },
                'log_ten': {
                    precedence: 5,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.log10(y)))
                },
                'abs': {
                    precedence: 5,
                    arity: 1,
                    code: ((x, y) => stack.push(Math.abs(y)))
                },
                ',': {
                    precedence: Infinity,
                    arity: 2,
                    code: ((x, y) => {
                        stack.push(x);
                        stack.push(y);
                    })
                }
            };

            // 处理表达式
            expression = `(${expression})`; // 这个括号是必要的，涉及正负数前缀（ “(+” 与 “(-” ）
            expression = expression.replace(/\s+/g, ''); // 删除所有空格
            expression = expression.replace(/\(\-/g, '(0-'); // 处理负数前缀（例如：(-2)）
            expression = expression.replace(/\(\+/g, '(0+'); // 处理正数前缀（例如：(+2)）
            expression = expression.replace(/sqrt/gi, '√'); // 处理立方根 √
            expression = expression.replace(/cbrt/gi, '∛'); // 处理平方根 ∛
            expression = expression.replace(/4thrt/gi, '∜'); // 处理四方根 ∜
            expression = expression.replace(/π|pi/gi, `${Math.PI}`); // 处理 π
            expression = expression.replace(/(?<!t)e(?!n)/gi, `${Math.E}`); // 处理 e
            expression = expression.replace(/phi|φ/gi, '1.618033988749895'); // 处理 φ
            expression = expression.replace(/\)\s*\(/g, ')·('); // 在两个连续括号的括号之间插入乘法（例如：(2+3)(3+4)）
            expression = expression.replace(/\)\s*(\d*\.?\d+)/g, ')$1·'); // 在后括号与小数之间插入乘法（例如：(2+3)0.1）
            expression = expression.replace(/(\d*\.?\d+)\s*\(/g, '$1·('); // 在小数与前括号之间插入乘法（例如：0.1(2+3)）

            // 转换后缀表示法
            try {
                let tokens = expression.match(/(?:sin|cos|tan|asin|acos|atan_xy|atan|log_ten|log|abs|[()]|[\d.]+|\S)/gi);
                if (tokens === null) return '';
                for (let token of tokens) {
                    if (token === '(') {
                        // 处理左括号
                        stack.push(token);
                    } else if (token === ')') {
                        // 处理右括号
                        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                            postfix.push(stack.pop());
                        }
                        stack.pop();  // 弹出左括号
                    } else {
                        let value = parseFloat(token);
                        if (isNaN(value)) {
                            // 处理运算符
                            while (stack.length > 0 && operators[token.toLowerCase()].precedence <= operators[stack[stack.length - 1].toLowerCase()].precedence) {
                                postfix.push(stack.pop());
                            }
                            stack.push(token);
                        } else {
                            // 处理数字
                            postfix.push(value);
                        }
                    }
                }

                // 弹出剩余的运算符
                while (stack.length > 0) {
                    postfix.push(stack.pop());
                }

                // 计算后缀表达式
                stack = [];
                for (let token of postfix) {
                    if (typeof token === 'number') {
                        stack.push(token);
                    } else {
                        let y = stack.pop();
                        let x = null;
                        if (operators[token.toLowerCase()].arity >= 2) {
                            x = stack.pop();
                        }
                        if (typeof y === 'undefined' || typeof x === 'undefined') {
                            throw new Error('number is undefined')
                        };
                        operators[token.toLowerCase()].code(x, y);
                    }
                }
            }
            catch (error) {
                return '';
            }

            if (stack.length !== 1) return '';
            return stack[0];
        }

        findPartition({ VALUE, RANGE_START, RANGE_END, NUM_PARTITIONS }) {
            VALUE = Cast.toNumber(VALUE);
            RANGE_START = Cast.toNumber(RANGE_START) - 1;
            RANGE_END = Cast.toNumber(RANGE_END);
            NUM_PARTITIONS = Cast.toNumber(NUM_PARTITIONS);
            const partitionSize = (RANGE_END - RANGE_START) / NUM_PARTITIONS;
            const partitionIndex = Math.floor((VALUE - RANGE_START) / partitionSize + 0.5);
            return partitionIndex;
        }

        booleanMenu({ BOOLEAN }) {
            if (BOOLEAN === 'random') return Math.random() < 0.5;
            return BOOLEAN == 'true' ? true : false;
        }

        probability({ NUM }) {
            let decimalProbability = Cast.toNumber(NUM) / 100;
            let random = Math.random();
            return random < decimalProbability;
        }

        isTrue({ OPERAND }) {
            return Cast.toBoolean(OPERAND);
        }

        _isPrime = (number) => {
            if (number <= 1) return false;
            if (number <= 3) return true;
            if (number % 2 === 0 || number % 3 === 0) return false;
            let i = 5;
            while (i * i <= number) {
                if (number % i === 0 || number % (i + 2) === 0) return false;
                i += 6;
            }
            return true;
        };

        _isComposite = (number) => {
            if (number <= 1) return false;
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return true;
            }
            return false;
        };

        checkType({ INPUT, MODE }) {
            INPUT = String(INPUT);
            const isNumRegex = /^-?\d+(\.\d+)?(e[+-]?\d+)?$/i;
            switch (MODE) {
                case 'number': return isNumRegex.test(INPUT);
                case 'positiveNumber': return Cast.toNumber(INPUT) > 0 && isNumRegex.test(INPUT);
                case 'negativeNumber': return Cast.toNumber(INPUT) < 0 && isNumRegex.test(INPUT);
                case 'evenNumber': return Cast.toNumber(INPUT) % 2 === 0 && isNumRegex.test(INPUT);
                case 'oddNumber': return Cast.toNumber(INPUT) % 2 !== 0 && isNumRegex.test(INPUT);
                case 'integerNumber': return Cast.toNumber(INPUT) % 1 === 0 && isNumRegex.test(INPUT);
                case 'decimalNumber': return Cast.toNumber(INPUT) % 1 !== 0 && isNumRegex.test(INPUT);
                case 'primeNumber': return this._isPrime(Cast.toNumber(INPUT)) && isNumRegex.test(INPUT);
                case 'compositeNumber': return this._isComposite(Cast.toNumber(INPUT)) && isNumRegex.test(INPUT);
                case 'text': return !isNumRegex.test(INPUT) && INPUT.length >= 1;
                case 'boolean': return INPUT === 'true' || INPUT === 'false';
                default: return false;
            }
        }

        _compare(arg1, arg2, symbol) {
            if (symbol === 'equal') return Cast.compare(arg1, arg2) === 0;
            if (symbol === 'strictlyEqual') return String(arg1) === String(arg2);
            if (symbol === 'greater') return Cast.compare(arg1, arg2) > 0;
            if (symbol === 'less') return Cast.compare(arg1, arg2) < 0;
            if (symbol === 'greaterOrEqual') return Cast.compare(arg1, arg2) >= 0;
            if (symbol === 'lessOrEqual') return Cast.compare(arg1, arg2) <= 0;
            if (symbol === 'unequal') return Cast.compare(arg1, arg2) !== 0;
            if (symbol === 'strictlyUnequal') return String(arg1) !== String(arg2);
            if (symbol === 'equalNegative') return Cast.compare(arg1, -arg2) === 0;
            if (symbol === 'EqualPON') return Cast.compare(arg1, -arg2) === 0 || Cast.compare(arg1, arg2) === 0;
            if (symbol === 'approximatelyEqual') return Math.abs(arg1 - arg2) <= 0.5;
            if (symbol === 'vertical') return ((arg1 - (arg2 - 90)) % 180) === 0;
            if (symbol === 'parallel') return ((arg1 - arg2) % 180) === 0;
            return false;
        }

        compare({ OPERAND1, OPERAND2, SYMBOL }) {
            return this._compare(OPERAND1, OPERAND2, SYMBOL);
        }

        continuousCompare({ OPERAND1, OPERAND2, OPERAND3, SYMBOL1, SYMBOL2 }) {
            const result1 = this._compare(OPERAND1, OPERAND2, SYMBOL1);
            const result2 = this._compare(OPERAND2, OPERAND3, SYMBOL2);
            return result1 && result2;
        }

        approximatelyEqual({ OPERAND1, OPERAND2, NUM }) {
            OPERAND1 = Cast.toNumber(OPERAND1);
            OPERAND2 = Cast.toNumber(OPERAND2);
            NUM = Cast.toNumber(NUM);
            return Math.abs(OPERAND1 - OPERAND2) <= NUM;
        }

        isBetween({ NUM, START, END }) {
            const num = Cast.toNumber(NUM);
            const start = Math.min(Cast.toNumber(START), Cast.toNumber(END));
            const end = Math.max(Cast.toNumber(START), Cast.toNumber(END));
            return (start <= num) && (num <= end);
        }

        trueBlock = () => true;

        falseBlock = () => false;

        logicGateOperation({ OPERAND1, OPERAND2, SYMBOL }) {
            const operand1 = Cast.toBoolean(OPERAND1);
            const operand2 = Cast.toBoolean(OPERAND2);
            if (SYMBOL === 'nand') return !(operand1 && operand2);
            if (SYMBOL === 'nor') return !(operand1 || operand2);
            if (SYMBOL === 'xor') return operand1 !== operand2;
            if (SYMBOL === 'xnor') return operand1 === operand2;
            return false;
        }

        strictlyEqualBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'strictlyEqual')
        }

        greaterOrEqualBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'greaterOrEqual')
        }

        lessOrEqualBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'lessOrEqual')
        }

        unequalBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'unequal')
        }

        strictlyUnequalBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'strictlyUnequal')
        }

        equalNegativeBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'equalNegative')
        }

        EqualPONBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'EqualPON')
        }

        approximatelyEqualBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'approximatelyEqual')
        }

        verticalBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'vertical')
        }

        parallelBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'parallel')
        }

        text({ STRING }) {
            return Cast.toString(STRING);
        }

        test({ BOOLEAN, STRING1, STRING2 }) {
            return Cast.toBoolean(BOOLEAN) ? STRING1 : STRING2;
        }

        nandBlock = ({ OPERAND1, OPERAND2 }) => !(Cast.toBoolean(OPERAND1) && Cast.toBoolean(OPERAND2));

        norBlock = ({ OPERAND1, OPERAND2 }) => !(Cast.toBoolean(OPERAND1) || Cast.toBoolean(OPERAND2));

        xorBlock = ({ OPERAND1, OPERAND2 }) => Cast.toBoolean(OPERAND1) !== Cast.toBoolean(OPERAND2);

        xnorBlock = ({ OPERAND1, OPERAND2 }) => Cast.toBoolean(OPERAND1) === Cast.toBoolean(OPERAND2);

        repeat({ STRING, NUMBER }) {
            const text = String(STRING);
            const times = Cast.toNumber(NUMBER);
            return text.repeat(times);
        }

        trim({ STRING }) {
            return String(STRING).trim();
        }

        letters({ START, END, STRING }) {
            const start = Math.min(Cast.toNumber(START), Cast.toNumber(END));
            const end = Math.max(Cast.toNumber(START), Cast.toNumber(END));
            return String(STRING).slice(
                Cast.toNumber(start) - 1, Cast.toNumber(end)
            );
        }

        remove({ START, END, STRING }) {
            const start = Math.min(Cast.toNumber(START), Cast.toNumber(END));
            const end = Math.max(Cast.toNumber(START), Cast.toNumber(END));
            return String(STRING).substring(
                0, Cast.toNumber(start) - 1
            ) + String(STRING).substring(
                Cast.toNumber(end)
            );
        }

        insert({ STRING, INSERT_STR, INDEX }) {
            const str = String(STRING);
            const insStr = String(INSERT_STR);
            const index = Cast.toNumber(INDEX);

            if (index > 0 && index <= str.length + 1) {
                return str.slice(0, index - 1) + insStr + str.slice(index - 1);
            } else {
                return str;
            }
        }

        replace({ STRING1, STRING2, STRING3 }) {
            const text = String(STRING1);
            const oldStr = String(STRING2);
            const newStr = String(STRING3);
            return text.replace(new RegExp(oldStr, 'g'), newStr);
        }

        replaceIndex({ STRING, START, END, REPLACEMENT }) {
            let start = Math.min(Cast.toNumber(START), Cast.toNumber(END));
            let end = Math.max(Cast.toNumber(START), Cast.toNumber(END));
            let str = String(STRING);
            let rep = String(REPLACEMENT);
            start = start - 1;
            start = Math.max(0, start);
            end = Math.min(str.length, end);
            return str.slice(0, start) + rep + str.slice(end);
        }

        _countKeyword = (sentence, keyword) => (sentence.match(new RegExp(keyword, 'gi')) || []).length;

        toggleCase({ MODE, STRING2, STRING1 }) {
            if (MODE === 'first') return String(STRING1).indexOf(String(STRING2)) + 1;
            if (MODE === 'last') return String(STRING1).lastIndexOf(String(STRING2)) + 1;
            if (MODE === 'number') return this._countKeyword(String(STRING1), String(STRING2));
            return '';
        }

        _textToTitleCase = (str) => str.replace(/\S+/g, function (txt) {
            return txt[0].toUpperCase() + txt.substring(1).toLowerCase();
        });

        convert({ STRING, MODE }) {
            if (MODE === 'uppercase') return String(STRING).toUpperCase();
            if (MODE === 'lowercase') return String(STRING).toLowerCase();
            if (MODE === 'capitalize') return this._textToTitleCase(String(STRING));
            if (MODE === 'reverse') return (String(STRING)).split('').reverse().join('');
            return '';
        }

        split({ STRING, SYMBOL, NUM }) {
            const str = String(STRING);
            const symbol = String(SYMBOL);
            const num = Cast.toNumber(NUM);
            if (!Number.isInteger(num)) return '';
            return (str.split(symbol)[(num - 1)]) ?? '';
        }

        splitAndRemove({ STRING, SYMBOL, NUM }) {
            const str = String(STRING);
            const symbol = String(SYMBOL);
            const num = Cast.toNumber(NUM);
            const arr = str.split(symbol);
            if (NUM < 1 || !Number.isInteger(num)) return str;
            arr.splice(num - 1, 1);
            return arr.join(symbol);
        }

        splitAndInsert({ STRING, SYMBOL, INSERT_STR, INDEX }) {
            const str = String(STRING);
            const symbol = String(SYMBOL);
            const insStr = String(INSERT_STR);
            const index = Cast.toNumber(INDEX);
            let splitted = str.split(symbol);
            if (index < 1 || index > splitted.length || !Number.isInteger(index)) {
                return str;
            }
            splitted.splice(index - 1, 0, insStr);
            return splitted.join(symbol);
        }

        splitAndReplace({ STRING, SYMBOL, REPLACE_STR, INDEX }) {
            const str = String(STRING);
            const symbol = String(SYMBOL);
            const repStr = String(REPLACE_STR);
            const index = Cast.toNumber(INDEX);
            let splitted = str.split(symbol);
            if (index < 1 || index > splitted.length || !Number.isInteger(index)) {
                return str;
            }
            splitted[index - 1] = repStr;
            return splitted.join(symbol);
        }

        splitAndShuffle({ STRING, SYMBOL }) {
            const str = String(STRING);
            const symbol = String(SYMBOL);
            let splitted = str.split(symbol);
            for (let i = splitted.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [splitted[i], splitted[j]] = [splitted[j], splitted[i]];
            }
            return splitted.join(symbol);
        }

        splitAndAnalysis({ STRING, SYMBOL, MODE }) {
            const str = String(STRING);
            const symbol = String(SYMBOL);
            const splitted = str.split(symbol);
            const numberArr = splitted.map(Cast.toNumber);
            switch (MODE) {
                case 'max': return Math.max(...numberArr);
                case 'min': return Math.min(...numberArr);
                case 'mean': {
                    const sum = numberArr.reduce((acc, curr) => acc + Number(curr), 0);
                    return sum / numberArr.length;
                }
                case 'sum': return numberArr.reduce((acc, curr) => acc + Number(curr), 0);
            }
        }

        join({ STRING }, util) {
            const thread = util.thread;
            thread.joinValue = thread.joinValue ?? {
                value: '',
                readyClean: 'false'
            }
            if (thread.joinValue.readyClean) {
                thread.joinValue = {
                    value: Cast.toString(STRING),
                    readyClean: false
                }
                return;
            }
            thread.joinValue = {
                value: thread.joinValue.value + Cast.toString(STRING),
                readyClean: false
            }
        }

        getJoin({ }, util) {
            const thread = util.thread;
            if (thread.joinValue) {
                thread.joinValue.readyClean = true;
                return thread.joinValue.value ?? '';
            }
            return '';
        }

        getUnicode({ STRING }) {
            STRING = String(STRING);
            if (STRING.length < 1) return '';
            return STRING.charCodeAt();
        }

        unicodeToString({ STRING }) {
            if (isNaN(STRING)) return '';
            return String.fromCharCode(STRING);
        }

        shuffleString({ STRING }) {
            let array = String(STRING).split('');
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array.join('');
        }

        overwrite({ ORIGINAL, OTHER, DIRECTION }) {
            const originalStr = String(ORIGINAL);
            const otherStr = String(OTHER);
            const isFromStart = DIRECTION === 'f2b';
            const oLength = originalStr.length;
            const fLength = otherStr.length;
            let result = '';
            if (isFromStart) result = otherStr + originalStr.slice(fLength, oLength);
            else result = originalStr.slice(0, oLength - fLength) + otherStr;
            if (oLength <= fLength) result = otherStr;
            return result;
        }

        padString({ ORIGINAL_STR, REQUIRED_LENGTH, CHAR_TO_ADD, POSITION }) {
            let str = String(ORIGINAL_STR);
            let add = String(CHAR_TO_ADD);
            let len = Cast.toNumber(REQUIRED_LENGTH);

            let diff = len - str.length;

            if (diff <= 0) {
                return str;
            }

            if (POSITION === 'front') {
                return add.repeat(diff) + str;
            }
            else {
                return str + add.repeat(diff);
            }
        }

        calculateLineLength({ X1, Y1, X2, Y2 }) {
            const x1 = Cast.toNumber(X1);
            const y1 = Cast.toNumber(Y1);
            const x2 = Cast.toNumber(X2);
            const y2 = Cast.toNumber(Y2);
            return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        }

        calculateLineDirection({ X1, Y1, X2, Y2 }) {
            const x1 = Cast.toNumber(X1);
            const y1 = Cast.toNumber(Y1);
            const x2 = Cast.toNumber(X2);
            const y2 = Cast.toNumber(Y2);
            let angleRadians = Math.atan2(y2 - y1, x2 - x1);
            let angleDegrees = angleRadians * 180 / Math.PI;
            let scratchAngle = -angleDegrees + 90;
            if (scratchAngle < -180) {
                scratchAngle = 360 + scratchAngle;
            }
            else if (scratchAngle > 180) {
                scratchAngle = scratchAngle - 360;
            }
            return scratchAngle;
        }

        calculateIntersection({ X1, Y1, X2, Y2, X3, Y3, X4, Y4 }) {
            const x1 = Cast.toNumber(X1);
            const y1 = Cast.toNumber(Y1);
            const x2 = Cast.toNumber(X2);
            const y2 = Cast.toNumber(Y2);
            const x3 = Cast.toNumber(X3);
            const y3 = Cast.toNumber(Y3);
            const x4 = Cast.toNumber(X4);
            const y4 = Cast.toNumber(Y4);
            let denominator = (x2 - x1) * (y4 - y3) - (y2 - y1) * (x4 - x3);
            if (denominator === 0) {
                return '';
            }
            let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
            let x = x1 + ua * (x2 - x1);
            let y = y1 + ua * (y2 - y1);
            return String([x, y]);
        }

        triangle({ X1, Y1, X2, Y2, X3, Y3, MODE }) {
            const x1 = Cast.toNumber(X1);
            const y1 = Cast.toNumber(Y1);
            const x2 = Cast.toNumber(X2);
            const y2 = Cast.toNumber(Y2);
            const x3 = Cast.toNumber(X3);
            const y3 = Cast.toNumber(Y3);
            if (MODE === 'area') {
                let points = [[x1, y1], [x2, y2], [x3, y3]];
                let area = 0;
                let n = points.length;
                for (let i = 0; i < n; i++) {
                    let x1 = points[i][0];
                    let y1 = points[i][1];
                    let x2 = points[(i + 1) % n][0];
                    let y2 = points[(i + 1) % n][1];
                    area += x1 * y2;
                    area -= x2 * y1;
                }
                area = Math.abs(area) / 2;
                return (area);
            }
            if (MODE === 'circumference') {
                let i = 0;
                i += Math.sqrt(Math.pow(x1 - Cast.toNumber(x2), 2) + Math.pow(y1 - y2, 2));
                i += Math.sqrt(Math.pow(x2 - Cast.toNumber(x3), 2) + Math.pow(y2 - y3, 2));
                i += Math.sqrt(Math.pow(x3 - Cast.toNumber(x1), 2) + Math.pow(y3 - y1, 2));
                return i;
            }
            return 0;
        }

        triangleArea({ S1, S2, S3 }) {
            const s1 = Cast.toNumber(S1);
            const s2 = Cast.toNumber(S2);
            const s3 = Cast.toNumber(S3);
            const s = (s1 + s2 + s3) / 2;
            const area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
            return area;
        }

        rectangle({ X1, Y1, X2, Y2, X3, Y3, X4, Y4, MODE }) {
            const x1 = Cast.toNumber(X1);
            const y1 = Cast.toNumber(Y1);
            const x2 = Cast.toNumber(X2);
            const y2 = Cast.toNumber(Y2);
            const x3 = Cast.toNumber(X3);
            const y3 = Cast.toNumber(Y3);
            const x4 = Cast.toNumber(X4);
            const y4 = Cast.toNumber(Y4);
            if (MODE === 'area') {
                let points = [[x1, y1], [x2, y2], [x3, y3], [x4, y4]];
                let area = 0;
                let n = points.length;
                for (let i = 0; i < n; i++) {
                    let x1 = points[i][0];
                    let y1 = points[i][1];
                    let x2 = points[(i + 1) % n][0];
                    let y2 = points[(i + 1) % n][1];
                    area += x1 * y2;
                    area -= x2 * y1;
                }
                area = Math.abs(area) / 2;
                return (area);
            }
            if (MODE === 'circumference') {
                let i = 0;
                i += Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
                i += Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
                i += Math.sqrt(Math.pow(x3 - x4, 2) + Math.pow(y3 - y4, 2));
                i += Math.sqrt(Math.pow(x4 - x1, 2) + Math.pow(y4 - y1, 2));
                return i;
            }
            return 0;
        }

        _parseGraphString(graphString) {
            const cleanedGraphString = graphString.replace(/\s/g, '');
            const regex = /\((\d+),(\d+)\)/g;
            let match;
            const points = [];

            while ((match = regex.exec(cleanedGraphString)) !== null) {
                points.push([parseInt(match[1]), parseInt(match[2])]);
            }

            return points;
        }

        graph({ GRAPH, MODE }) {
            try {
                let points = String(GRAPH);
                if (GRAPH.includes('(')) {
                    points = this._parseGraphString(points);
                }
                else {
                    points = JSON.parse(GRAPH);
                }
                let n = points.length;
                if (MODE === 'area') {
                    let area = 0;
                    for (let i = 0; i < n; i++) {
                        let x1 = points[i][0];
                        let y1 = points[i][1];
                        let x2 = points[(i + 1) % n][0];
                        let y2 = points[(i + 1) % n][1];
                        area += x1 * y2;
                        area -= x2 * y1;
                    }
                    area = Math.abs(area) / 2;
                    return (area);
                }
                if (MODE === 'circumference') {
                    let j = 0;
                    const numPoints = points.length;
                    for (let i = 0; i < numPoints; i++) {
                        const x1 = points[i][0];
                        const y1 = points[i][1];
                        const x2 = points[(i + 1) % numPoints][0];
                        const y2 = points[(i + 1) % numPoints][1];
                        j += Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
                    }
                    return j;
                }
            }
            catch {
                return 0;
            }
            return 0;
        }

        circle({ UNITS, LENGTH, MODE }) {
            const length = Cast.toNumber(LENGTH);
            if (MODE === 'circumference') {
                return 2 * Math.PI * (UNITS === 'radius' ? length : length / 2);
            }
            if (MODE === 'area') {
                return Math.PI * ((UNITS === 'radius' ? length : length / 2) ** 2);
            }
            return 0;
        }

        isAngleInRange({ ANGLE1, ANGLE2, ANGLE3, MODE }) {
            const normalizeAngle = angle => (angle + 180) % 360 - 180;
            let angle1 = normalizeAngle(Cast.toNumber(ANGLE1));
            let angle2 = normalizeAngle(Cast.toNumber(ANGLE2));
            let angle3 = normalizeAngle(Cast.toNumber(ANGLE3));
            switch (MODE) {
                case 'interiorAngle': {
                    if (angle2 > angle3) {
                        [angle2, angle3] = [angle3, angle2];
                    }
                    if (angle2 <= angle3) {
                        return angle1 >= angle2 && angle1 <= angle3;
                    } else {
                        return angle1 >= angle2 || angle1 <= angle3;
                    }
                }
                case 'exteriorAngle': {
                    if (angle2 < angle3) {
                        [angle2, angle3] = [angle3, angle2];
                    }
                    if (angle2 >= angle3) {
                        return angle1 >= angle2 || angle1 <= angle3;
                    } else {
                        return angle1 >= angle2 && angle1 <= angle3;
                    }
                }
                case 'clockwise': {
                    if (angle2 <= angle3) {
                        return angle1 >= angle2 && angle1 <= angle3;
                    } else {
                        return angle1 <= angle3 || angle1 >= angle2;
                    }
                }
                case 'counterClockwise': {
                    if (angle2 >= angle3) {
                        return angle1 >= angle3 && angle1 <= angle2;
                    } else {
                        return angle1 <= angle2 || angle1 >= angle3;
                    }
                }
            }
            return false;
        }

        calculateAngleDifference({ ANGLE1, ANGLE2, MODE }) {
            const angle1 = Cast.toNumber(ANGLE1);
            const angle2 = Cast.toNumber(ANGLE2);
            let diff = Math.abs(angle1 - angle2) % 360;
            switch (MODE) {
                case 'interiorAngle': return diff <= 180 ? diff : 360 - diff;
                case 'exteriorAngle': return diff <= 180 ? 360 - diff : diff;
                case 'clockwise': return angle1 <= angle2 ? (angle2 - angle1) % 360 : (360 - (angle1 - angle2) % 360);
                case 'counterClockwise': return angle1 >= angle2 ? (angle1 - angle2) % 360 : (360 - (angle2 - angle1) % 360);
            }
            return 0;
        }

        base({ NUM, INTO1, INTO2 }) {
            const into1 = Cast.toNumber(INTO1);
            const into2 = Cast.toNumber(INTO2);
            if (!Number.isInteger(into1) || !Number.isInteger(into2)) {
                return '';
            }
            if (!this.isBase({ NUM: NUM, BASE: INTO1 })) return '';
            if (into1 > 1 && into1 < 37 && into2 > 1 && into2 < 37) {
                let dec = 0;
                let num = NUM.toString().split('.');
                if (num.length > 1) {
                    // 处理小数部分
                    let fractional = 0;
                    const fractionalStr = num[1];
                    for (let i = 0; i < fractionalStr.length; i++) {
                        const digit = parseInt(fractionalStr[i], into1);
                        fractional += digit / (into1 ** (i + 1));
                    }
                    dec = parseInt(num[0], into1) + fractional;
                } else {
                    dec = parseInt(num[0], into1);
                }
                const result = dec.toString(into2);
                return result;
            } else {
                return '';
            }
        }

        toBin({ NUM }) {
            let num = Cast.toNumber(NUM);
            return num.toString(2);
        }

        toDec({ NUM }) {
            if (!this.isBase({ NUM: NUM, BASE: 2 })) return 0;
            let num = NUM.toString().split('.');
            if (num.length > 1) {
                // 处理小数部分
                let dec = parseInt(num[1], 2) / (2 ** num[1].length);
                num = parseInt(num[0], 2) + dec;
            } else {
                num = parseInt(num[0], 2);
            }
            return num;
        }

        _char0toZ = () => '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        isBase({ NUM, BASE }) {
            let base = Cast.toNumber(BASE)
            if (!Number.isInteger(base)) {
                return '';
            }
            if (base > 1 && base < 37) {
                const chars = this._char0toZ().substring(0, base);
                return new RegExp(
                    `^[${chars}\\.]+(?:e[+-]?[${chars}]+)?$`, 'i'
                ).test(Cast.toString(NUM));
            }
            return false;
        }

        numberNot({ NUM }) {
            const num = Cast.toBoolean(NUM);
            return num ? 0 : 1;
        }

        booleanToNumber({ BOOLEAN }) {
            const input = Cast.toNumber(
                Cast.toBoolean(BOOLEAN)
            );
            return input ? 1 : 0;
        }

        bitwiseBlock({ NUM1, SYMBOL, NUM2 }) {
            const num1 = Cast.toNumber(NUM1);
            const num2 = Cast.toNumber(NUM2);
            if (SYMBOL === 'and') return num1 & num2;
            if (SYMBOL === 'or') return num1 | num2;
            if (SYMBOL === 'xor') return num1 ^ num2;
            if (SYMBOL === 'leftShift') return num1 << num2;
            if (SYMBOL === 'rightShift') return num1 >> num2;
            if (SYMBOL === 'logicalRightShift') return num1 >>> num2;
            return 0;
        }

        bitwiseNot({ NUM }) {
            return ~Cast.toNumber(NUM);
        }

        bitwiseAndBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'and', NUM2: NUM2 });

        bitwiseOrBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'or', NUM2: NUM2 });

        bitwiseXorBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'xor', NUM2: NUM2 });

        bitwiseLeftShiftBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'leftShift', NUM2: NUM2 });

        bitwiseRightShiftBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'rightShift', NUM2: NUM2 });

        bitwiseLogicalRightShiftBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'logicalRightShift', NUM2: NUM2 });

        getConstant({ OPTION }) {
            if (OPTION === 'pi') return 3.141592653589793;
            if (OPTION === 'phi') return 1.618033988749895;
            if (OPTION === 'gamma') return 0.577215664901532;
            if (OPTION === 'e') return 2.718281828459045;
            if (OPTION === 'sqrt2') return 1.4142135623730951;
            if (OPTION === 'sqrt3') return 1.7320508075688772;
            if (OPTION === 'ln2') return 0.6931471805599453;
            if (OPTION === 'Infinity') return Infinity;
            if (OPTION === '-Infinity') return -Infinity;
            if (OPTION === 'NaN') return NaN;
            if (OPTION === 'newLine') return '\n';
            return OPTION;
        }
    }

    Scratch.extensions.register(new Operation());
})(Scratch);
