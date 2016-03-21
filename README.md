
# 与件
 ・レスポシブ対応
 ・白背景のコンテンツ要素を真ん中に表示  
 ・ウィンドウの左上から右下への赤い斜線を描画  
 ・テキスト部分は選択できるようにする  


# 実装内容
 1.body(#container)に黒背景を設定  
 2.可変対応のwindowサイズ(width、height)を取得し、body(#container)設定  
 3.body(#container)の半分のwidthを白背景のコンテンツ(#contents)を設定  
 4.可変対応の白背景のコンテンツ要素(#contents)のwidth,heightを取得し、  
   ネガティブマージンを設定し、白背景のコンテンツ要素(#contents)を真ん中に表示  
 5.可変対応のwindowの右下の値を座標を取得し、canvasでwindowの左上から右下への赤い斜線を設定  


# 実装のポイント
 ・テキスト部分(<p>)を最上部に表示し、選択できるようにする為に、  
 　[position:relative;]を設定し、[z-index]で最上部の数値を指定すること。  
 ・可変時対応の為、body(#container)の高さ指定は[min-height]で設定すること。  
 ・更新する際に管理しやすいよう、変数は大文字で設定。

