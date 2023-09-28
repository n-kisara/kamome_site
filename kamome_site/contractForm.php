<?php include_once('header.php') ?>
<main>
    <div class="container">
        <div class="wrapper">
            <h2>お問い合わせ</h2>
            <form action="">
                <div>
                    <div>
                        <div>
                            <label for="name">名前 :</label>
                        </div>
                        <div>
                            <input type="text" placeholder="山田太郎">
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="mail">メールアドレス :</label>
                        </div>
                        <div>
                            <input type="text" placeholder="xxxxx@@gmail.com">
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="kind">お問い合わせ種別 :</label>
                        </div>
                        <div>
                            <select name="kind" id="kind">
                                <option value="application">申し込み方法について</option>
                                <option value="discount">割引について</option>
                                <option value="plan">プランについて</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="content">内容 :</label>
                        </div>
                        <div>
                            <textarea name="content" id="" cols="30" rows="20"></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</main>
<?php include_once('footer.php');?>