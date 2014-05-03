opinions = () ->
  console.log "hey opinion!!"
  url = "http://localhost:8888/opinions.php"

  $.ajax(
    type: 'GET'
    url: url
    dataType: 'json'
    success: (json) ->
      console.log json
      for val, key in json
        console.log key
        console.log val
        _label = $("<span>", {class: "opinion-label", text: val.label})
        _img = $("<img>", {src: "image/opinions/" +val.file_name})
        _dom = $('<div>', {class: "opinion-item col-4"}).append(_label, _img)
        $('#opinions').prepend(_dom)
  )

$ -> opinions()