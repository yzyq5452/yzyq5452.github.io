document.addEventListener('DOMContentLoaded', function() {
  // 选择文章内容区域的标题（根据你的主题，.post-content 可能要改成 .article 或 .post）
  var selector = '.post-content h1, .post-content h2, .post-content h3, .post-content h4';
  document.querySelectorAll(selector).forEach(function(el){
    if (!el.id) {
      // 取纯文本并做 slug 化
      var text = el.textContent || el.innerText;
      text = text.trim();
      if (!text) return;
      var id = text.toLowerCase()
        .replace(/[^\w\s-]/g, '')   // 去掉特殊字符
        .replace(/\s+/g, '-')       // 空格换成短横线
        .replace(/-+/g, '-');       // 连续短横线合并
      el.id = id;
    }
  });
});
