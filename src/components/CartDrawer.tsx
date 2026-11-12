import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [orderComplete, setOrderComplete] = useState<boolean>(false);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '请使用无塑料防震植物基填充物',
  });

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      onClearCart();
      setOrderComplete(false);
      setIsCheckingOut(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1F1C19]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#2C2926]/15 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#2C2926]/10 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <h2 className="text-lg font-medium text-[#242220] font-serif-brand">
                典藏选物袋
              </h2>
              <span className="text-xs text-[#7A736B] font-mono">
                ({items.reduce((acc, i) => acc + i.quantity, 0)} 件器物)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#544D45] hover:text-[#242220] transition-colors"
              aria-label="关闭选物袋"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderComplete ? (
              <div className="p-8 text-center space-y-3 bg-[#F2EDE4] border border-emerald-900/20 my-auto">
                <Check className="w-10 h-10 text-emerald-800 mx-auto" />
                <h3 className="text-lg font-serif-brand font-medium text-[#242220]">
                  器物典藏订单已提交
                </h3>
                <p className="text-xs text-[#635C53] font-sans-clean leading-relaxed">
                  订单号 #NL-202688 已生成。我们将采用 100% 植物基无塑包装与纯手工封笺为您安全打包启运。
                </p>
                <div className="text-[11px] font-mono text-[#8C847C] pt-2">
                  顺丰冷链特快 · 预计 48 小时内雅致送达
                </div>
              </div>
            ) : isCheckingOut ? (
              /* Checkout Form */
              <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
                <div className="pb-3 border-b border-[#2C2926]/10">
                  <span className="font-semibold text-sm font-serif-brand text-[#242220]">
                    收件信息与配送专线
                  </span>
                  <p className="text-[#7A726A] text-[11px]">
                    全线顺丰速运 · 纯纸质无胶带环保封箱
                  </p>
                </div>

                <div>
                  <label className="block text-[#47413A] font-medium mb-1">
                    收件人姓名
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.name}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, name: e.target.value })
                    }
                    placeholder="姓名"
                    className="w-full px-3 py-2 bg-[#F2EDE4] border border-[#2C2926]/15 text-[#242220] focus:outline-none focus:border-[#242220]"
                  />
                </div>

                <div>
                  <label className="block text-[#47413A] font-medium mb-1">
                    联系电话
                  </label>
                  <input
                    type="tel"
                    required
                    value={shippingInfo.phone}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, phone: e.target.value })
                    }
                    placeholder="手机号码"
                    className="w-full px-3 py-2 bg-[#F2EDE4] border border-[#2C2926]/15 text-[#242220] focus:outline-none focus:border-[#242220]"
                  />
                </div>

                <div>
                  <label className="block text-[#47413A] font-medium mb-1">
                    详细地址
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={shippingInfo.address}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, address: e.target.value })
                    }
                    placeholder="省市区、街道、门牌号"
                    className="w-full px-3 py-2 bg-[#F2EDE4] border border-[#2C2926]/15 text-[#242220] focus:outline-none focus:border-[#242220]"
                  />
                </div>

                <div>
                  <label className="block text-[#47413A] font-medium mb-1">
                    环保包装特约备注
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.notes}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, notes: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#F2EDE4] border border-[#2C2926]/15 text-[#242220] focus:outline-none focus:border-[#242220]"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="flex-1 py-2.5 border border-[#2C2926]/20 text-[#47413A] hover:bg-[#F2EDE4] transition-colors"
                  >
                    返回袋中
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#242220] text-[#FAF8F5] hover:bg-[#3D3934] transition-colors font-medium"
                  >
                    确认并支付 · ¥{subtotal}
                  </button>
                </div>
              </form>
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
                <div className="w-12 h-12 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#8C847B]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="text-base font-serif-brand text-[#242220]">
                  选物袋尚空
                </p>
                <p className="text-xs text-[#7A736B] font-sans-clean max-w-xs">
                  去器物矩阵探索更多捕捉自然光影的本真好物。
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-4 bg-[#F5F0E8] border border-[#2C2926]/10 flex gap-4"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-24 bg-[#FAF8F5] overflow-hidden shrink-0 border border-[#2C2926]/5">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-semibold text-[#242220] font-serif-brand line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-[#998F84] hover:text-[#242220] transition-colors"
                            aria-label="移除此器物"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-[#787168] mt-0.5">
                          {item.product.categoryLabel}
                        </p>
                        {item.giftWrapping && (
                          <span className="inline-block text-[10px] text-amber-900 bg-amber-100/70 px-1.5 py-0.5 mt-1">
                            极简礼赠包装已附
                          </span>
                        )}
                        {item.giftMessage && (
                          <p className="text-[10px] text-[#696157] italic mt-1 line-clamp-1">
                            寄语：“{item.giftMessage}”
                          </p>
                        )}
                      </div>

                      {/* Quantity & Item Subtotal */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#2C2926]/10">
                        <div className="flex items-center border border-[#2C2926]/20 bg-[#FAF8F5] text-xs">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="px-2 py-0.5 hover:bg-[#EAE4DC]"
                          >
                            -
                          </button>
                          <span className="px-2 font-mono tabular-nums font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="px-2 py-0.5 hover:bg-[#EAE4DC]"
                          >
                            +
                          </button>
                        </div>

                        <div className="font-mono text-xs font-semibold text-[#242220]">
                          ¥{item.product.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && !orderComplete && !isCheckingOut && (
            <div className="p-6 border-t border-[#2C2926]/10 bg-[#FAF8F5] space-y-4">
              <div className="space-y-1.5 text-xs text-[#635C53]">
                <div className="flex justify-between">
                  <span>器物小计</span>
                  <span className="font-mono font-medium text-[#242220]">
                    ¥{subtotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>生态无塑顺丰配送</span>
                  <span className="font-mono text-emerald-800">礼遇包邮</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-[#242220] pt-2 border-t border-[#2C2926]/10">
                  <span>总计</span>
                  <span className="font-mono text-base font-semibold">
                    ¥{subtotal}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3 px-6 bg-[#242220] text-[#FAF8F5] hover:bg-[#3D3934] transition-all text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2 shadow-sm"
              >
                <span>填写配送专线并结算</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <p className="text-[10px] text-center text-[#8C847B]">
                支持 7 天无理由素物退换 · 享终身可降解材料追踪服务
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
