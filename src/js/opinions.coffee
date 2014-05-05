opinions = (page = 0) ->
  url = "http://www.stb.tsukuba.ac.jp/~kasuga-campus/v1/opinions.php"
  if page
    url += "?page=" + page

  $.ajax(
    type: 'GET'
    url: url
    dataType: 'json'
    success: (data) ->
      json =  JSON.parse data
      console.log json
      $(".opinions").empty()
      for val, key in json.item
        console.log key
        console.log val
        _label = $("<span>", {class: "opinion-label", text: val.label})
        _img = $("<img>", {src: "http://www.stb.tsukuba.ac.jp/~kasuga-campus/v1/opinions/image/" +val.file_name})
        _box = $('<div>', {class: "opinion-item"}).append(_label, _img)
        _dom = $('<div>', {class: "opinion-box col-4"}).append(_box)
        $('.opinions').append(_dom)
      $(".opinion-menus").empty()
      for i in [0..json.info.count/16]
        _dom = $('<div>', {class: "opinion-menu", text: i, "data-page": i}).click( () ->
          opinions($(this).data("page"))
        )
        $('.opinion-menus').append(_dom)
    error: (e) ->
      _dom = $('<div>', {class: "opinion-error col-12", text: "データの取得に失敗しました"})
      $('.opinions').prepend(_dom)
  )

$ ->
  opinions()
