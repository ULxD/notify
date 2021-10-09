local diferencial = 1
RegisterNetEvent("Notify")
AddEventHandler("Notify",function(css,mensagem,tempo)
if not tempo then tempo = 4000 end
SendNUIMessage({ css = css,
mensagem = mensagem, tempo =
tempo, diferencial = diferencial }) diferencial = diferencial + 1 end)

local timer = 0
local zancudoTimer = 0
local thread = false
local thread2 = false
RegisterNetEvent("Notify:searchTimer")
AddEventHandler("Notify:searchTimer",function(css,mensagem,tempo)
    timer = timer + parseInt(mensagem)
    if not thread then
        thread = true
        CreateThread(function()
            SendNUIMessage({ nuiMsg = "showSearch",css = "procurado",mensagem = disp_time(timer), tempo = timer, diferencial = 1 })
            while true do
                Wait(1000)
                if timer > 0 then 
                    timer = timer - 1
                    SendNUIMessage({ css = "procurado",mensagem = disp_time(timer), tempo = timer, diferencial = 1 })
                else
                    thread = false
                    SendNUIMessage({ css = "procurado",mensagem = disp_time(timer), tempo = timer, diferencial = 1 })
                    break
                end
            end
        end)
    end
end)

function disp_time(time)
    local days = math.floor(time/86400)
    local remaining = time % 86400
    local hours = math.floor(remaining/3600)
    remaining = remaining % 3600
    local minutes = math.floor(remaining/60)
    remaining = remaining % 60
    local seconds = remaining
    if (hours < 10) then
      hours = "0" .. tostring(hours)
    end
    if (minutes < 10) then
      minutes = "0" .. tostring(minutes)
    end
    if (seconds < 10) then
      seconds = "0" .. tostring(seconds)
    end
    answer = hours..':'..minutes..':'..seconds
    return answer
  end
  
-- aviso
-- importante
-- sucesso
-- negado
-- procurado
-- zancudo
-- financeiro