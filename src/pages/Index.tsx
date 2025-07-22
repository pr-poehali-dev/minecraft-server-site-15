import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ServerStats {
  online: number;
  max: number;
  status: 'online' | 'offline';
  version: string;
  ip: string;
  port: number;
}

const Index = () => {
  const [serverStats, setServerStats] = useState<ServerStats>({
    online: 47,
    max: 100,
    status: 'online',
    version: '1.20.1',
    ip: 'apollo.minecraft-hosting.net',
    port: 25854
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setServerStats(prev => ({
        ...prev,
        online: Math.floor(Math.random() * 20) + 30
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const copyServerIP = () => {
    navigator.clipboard.writeText(`${serverStats.ip}:${serverStats.port}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url("/img/cfb12281-75cf-4a73-af51-ff4d61bce583.jpg")' }}
      ></div>
      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            CraftWorld Server
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Присоединяйся к нашему дружному сообществу! Выживание, постройки и приключения ждут тебя.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-200">
                Игроки онлайн
              </CardTitle>
              <Icon name="Users" className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {serverStats.online}/{serverStats.max}
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-emerald-400">Сервер онлайн</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-200">
                Версия
              </CardTitle>
              <Icon name="Download" className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {serverStats.version}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Minecraft Java Edition
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-200">
                Аптайм
              </CardTitle>
              <Icon name="Clock" className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                99.8%
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Стабильная работа 24/7
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Icon name="Server" className="h-5 w-5 text-emerald-400" />
                Подключение к серверу
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-600">
                <div>
                  <p className="text-slate-300 text-sm">IP адрес сервера:</p>
                  <p className="text-white font-mono text-lg">{serverStats.ip}:{serverStats.port}</p>
                </div>
                <Button
                  onClick={copyServerIP}
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  {copied ? (
                    <Icon name="Check" className="h-4 w-4" />
                  ) : (
                    <Icon name="Copy" className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Порт:</span>
                  <span className="text-white">{serverStats.port}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Статус:</span>
                  <Badge variant="secondary" className="bg-emerald-900 text-emerald-300">
                    Онлайн
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Icon name="Gamepad2" className="h-5 w-5 text-blue-400" />
                Особенности сервера
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <Icon name="Shield" className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Защита от гриферов</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Icon name="Zap" className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm">Быстрая производительность</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Icon name="Heart" className="h-4 w-4 text-red-400" />
                  <span className="text-sm">Дружное сообщество</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Icon name="Star" className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">Уникальные плагины</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Icon name="Home" className="h-4 w-4 text-orange-400" />
                  <span className="text-sm">Система домов</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Icon name="Trophy" className="h-4 w-4 text-amber-400" />
                  <span className="text-sm">Еженедельные ивенты</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
          >
            <Icon name="Play" className="mr-2 h-5 w-5" />
            Начать играть
          </Button>
          <p className="text-slate-400 text-sm mt-4">
            Скачай Minecraft и подключайся по IP: {serverStats.ip}:{serverStats.port}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;