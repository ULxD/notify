local diferencial = 1
RegisterNetEvent("Notify")
AddEventHandler("Notify",function(css,mensagem,tempo)
if not tempo then tempo = 4000 end
SendNUIMessage({ css = css,
mensagem = mensagem, tempo =
tempo, diferencial = diferencial }) diferencial = diferencial + 1 end)


-- aviso
-- importante
-- sucesso
-- negado
-- financeiro