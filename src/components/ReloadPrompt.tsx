import { useRegisterSW } from 'virtual:pwa-register/react';
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { useEffect } from 'react';

function ReloadPrompt() {
  const { toast } = useToast();
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  useEffect(() => {
    if (needRefresh) {
      toast({
        title: "Nova versão disponível",
        description: "Uma nova versão do site está disponível. Clique para atualizar.",
        action: (
          <ToastAction altText="Atualizar" onClick={() => updateServiceWorker(true)}>
            Atualizar
          </ToastAction>
        ),
        duration: Infinity,
      });
    }
  }, [needRefresh, toast, updateServiceWorker]);

  return null;
}

export default ReloadPrompt;