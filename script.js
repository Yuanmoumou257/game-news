document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    const resultsDiv = document.getElementById('search-results');

    // 清空之前的搜索结果
    resultsDiv.innerHTML = '';

    // 这里可以添加游戏资讯的查找逻辑
    if (query) {
        resultsDiv.innerHTML = `<p>搜索结果：${query} 的资讯暂未上线，我是真不会链接搜索引擎 不行你整死我吧!</p>`;
    } else {
        resultsDiv.innerHTML = '<p>请输入游戏名称进行搜索。</p>';
    }
});

document.getElementById('submit-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageList = document.getElementById('message-list');

    if (messageInput.value.trim()) {
        const li = document.createElement('li');
        li.textContent = messageInput.value;
        messageList.appendChild(li);
        messageInput.value = ''; // 清空输入框
    } else {
        alert('请输入留言内容。');
    }
});