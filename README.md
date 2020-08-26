# 完成项目
购物车功能未完成。

2020-8-26
已完成基本布局，利用云数据库存储登录状态

# 问题记录
1. tabBar 构建目录时，有些目录里的内容不显示，因为构建了超过5个目录，在wx/dist下删除多余的就可以了.
2. v-for多层循环是，报index索引错误。在mpvue中，v-for如果不定义index字段，默认就是index，多层v-for嵌套时候就会报这个错误，自己定义一下每一层嵌套的v-for的index字段就可以了。例如：<div v-for="(item, _index) in itemArr" :key="item.id">
	<div v-for="(itemChild, index) in item" :key="itemChild.id">
		...
	</div>
</div

3. v-for 不用index作key  
4. flyio请求本地数据报错，暂不知道原因