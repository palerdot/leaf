(function() {var implementors = {};
implementors['byteorder'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='byteorder/enum.Error.html' title='byteorder::Error'>Error</a>",];implementors['linear_map'] = ["impl&lt;K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='linear_map/struct.LinearMap.html' title='linear_map::LinearMap'>LinearMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a></span>",];implementors['libc'] = [];implementors['log'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='log/enum.LogLevel.html' title='log::LogLevel'>LogLevel</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='log/enum.LogLevelFilter.html' title='log::LogLevelFilter'>LogLevelFilter</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='log/struct.LogLocation.html' title='log::LogLocation'>LogLocation</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='log/struct.MaxLogLevelFilter.html' title='log::MaxLogLevelFilter'>MaxLogLevelFilter</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='log/struct.SetLoggerError.html' title='log::SetLoggerError'>SetLoggerError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='log/struct.ShutdownLoggerError.html' title='log::ShutdownLoggerError'>ShutdownLoggerError</a>",];implementors['time'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='time/struct.Duration.html' title='time::Duration'>Duration</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='time/struct.Timespec.html' title='time::Timespec'>Timespec</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='time/struct.SteadyTime.html' title='time::SteadyTime'>SteadyTime</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='time/struct.Tm.html' title='time::Tm'>Tm</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='time/enum.ParseError.html' title='time::ParseError'>ParseError</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='time/struct.TmFmt.html' title='time::TmFmt'>TmFmt</a>&lt;'a&gt;",];implementors['rustc_serialize'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/base64/enum.CharacterSet.html' title='rustc_serialize::base64::CharacterSet'>CharacterSet</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/base64/enum.Newline.html' title='rustc_serialize::base64::Newline'>Newline</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='rustc_serialize/base64/struct.Config.html' title='rustc_serialize::base64::Config'>Config</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/base64/enum.FromBase64Error.html' title='rustc_serialize::base64::FromBase64Error'>FromBase64Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/hex/enum.FromHexError.html' title='rustc_serialize::hex::FromHexError'>FromHexError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.Json.html' title='rustc_serialize::json::Json'>Json</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.ParserError.html' title='rustc_serialize::json::ParserError'>ParserError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.DecoderError.html' title='rustc_serialize::json::DecoderError'>DecoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.EncoderError.html' title='rustc_serialize::json::EncoderError'>EncoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.ErrorCode.html' title='rustc_serialize::json::ErrorCode'>ErrorCode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.JsonEvent.html' title='rustc_serialize::json::JsonEvent'>JsonEvent</a>","impl&lt;'l&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='rustc_serialize/json/enum.StackElement.html' title='rustc_serialize::json::StackElement'>StackElement</a>&lt;'l&gt;",];implementors['num'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='num/bigint/enum.Sign.html' title='num::bigint::Sign'>Sign</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='num/bigint/enum.ParseBigIntError.html' title='num::bigint::ParseBigIntError'>ParseBigIntError</a>","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='num/complex/struct.Complex.html' title='num::complex::Complex'>Complex</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='num/traits/struct.ParseFloatError.html' title='num::traits::ParseFloatError'>ParseFloatError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='num/traits/enum.FloatErrorKind.html' title='num::traits::FloatErrorKind'>FloatErrorKind</a>","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='num/rational/struct.ParseRatioError.html' title='num::rational::ParseRatioError'>ParseRatioError</a>",];implementors['enum_primitive'] = [];implementors['collenchyma'] = ["impl&lt;F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='collenchyma/framework/trait.IFramework.html' title='collenchyma::framework::IFramework'>IFramework</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/backend/struct.Backend.html' title='collenchyma::backend::Backend'>Backend</a>&lt;F&gt;","impl&lt;'a, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='collenchyma/framework/trait.IFramework.html' title='collenchyma::framework::IFramework'>IFramework</a> + 'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/backend/struct.BackendConfig.html' title='collenchyma::backend::BackendConfig'>BackendConfig</a>&lt;'a, F&gt; <span class='where'>where F::H: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/device/enum.DeviceType.html' title='collenchyma::device::DeviceType'>DeviceType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/device/enum.Error.html' title='collenchyma::device::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/hardware/enum.HardwareType.html' title='collenchyma::hardware::HardwareType'>HardwareType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/framework/enum.Error.html' title='collenchyma::framework::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/device/struct.Cpu.html' title='collenchyma::frameworks::native::device::Cpu'>Cpu</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/flatbox/struct.FlatBox.html' title='collenchyma::frameworks::native::flatbox::FlatBox'>FlatBox</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/hardware/struct.Hardware.html' title='collenchyma::frameworks::native::hardware::Hardware'>Hardware</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/function/struct.Function.html' title='collenchyma::frameworks::native::function::Function'>Function</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/binary/struct.Binary.html' title='collenchyma::frameworks::native::binary::Binary'>Binary</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/frameworks/native/enum.Error.html' title='collenchyma::frameworks::native::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/frameworks/native/struct.Native.html' title='collenchyma::frameworks::native::Native'>Native</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/memory/enum.MemoryType.html' title='collenchyma::memory::MemoryType'>MemoryType</a>","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma/tensor/struct.SharedTensor.html' title='collenchyma::tensor::SharedTensor'>SharedTensor</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/tensor/enum.Error.html' title='collenchyma::tensor::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/error/enum.Error.html' title='collenchyma::error::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma/plugin/enum.Error.html' title='collenchyma::plugin::Error'>Error</a>",];implementors['rblas'] = ["impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='rblas/math/mat/struct.Mat.html' title='rblas::math::mat::Mat'>Mat</a>&lt;T&gt;",];implementors['collenchyma_nn'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma_nn/enum.ConvForwardAlgo.html' title='collenchyma_nn::ConvForwardAlgo'>ConvForwardAlgo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma_nn/enum.ConvBackwardFilterAlgo.html' title='collenchyma_nn::ConvBackwardFilterAlgo'>ConvBackwardFilterAlgo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma_nn/enum.ConvBackwardDataAlgo.html' title='collenchyma_nn::ConvBackwardDataAlgo'>ConvBackwardDataAlgo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma_nn/frameworks/native/helper/struct.ConvolutionConfig.html' title='collenchyma_nn::frameworks::native::helper::ConvolutionConfig'>ConvolutionConfig</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma_nn/frameworks/native/helper/struct.NormalizationConfig.html' title='collenchyma_nn::frameworks::native::helper::NormalizationConfig'>NormalizationConfig</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='collenchyma_nn/frameworks/native/helper/struct.PoolingConfig.html' title='collenchyma_nn::frameworks::native::helper::PoolingConfig'>PoolingConfig</a>",];implementors['collenchyma_blas'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='collenchyma_blas/transpose/enum.Transpose.html' title='collenchyma_blas::transpose::Transpose'>Transpose</a>",];implementors['leaf'] = ["impl&lt;B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='collenchyma/backend/trait.IBackend.html' title='collenchyma::backend::IBackend'>IBackend</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layer/struct.Layer.html' title='leaf::layer::Layer'>Layer</a>&lt;B&gt;","impl&lt;B: <a class='trait' href='collenchyma/backend/trait.IBackend.html' title='collenchyma::backend::IBackend'>IBackend</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='trait' href='leaf/layer/trait.ILayer.html' title='leaf::layer::ILayer'>ILayer</a>&lt;B&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layer/struct.LayerConfig.html' title='leaf::layer::LayerConfig'>LayerConfig</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='leaf/layer/enum.LayerType.html' title='leaf::layer::LayerType'>LayerType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/activation/relu/struct.ReLU.html' title='leaf::layers::activation::relu::ReLU'>ReLU</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/activation/sigmoid/struct.Sigmoid.html' title='leaf::layers::activation::sigmoid::Sigmoid'>Sigmoid</a>","impl&lt;B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='collenchyma_nn/plugin/trait.Convolution.html' title='collenchyma_nn::plugin::Convolution'>Convolution</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a>&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/common/convolution/struct.Convolution.html' title='leaf::layers::common::convolution::Convolution'>Convolution</a>&lt;B&gt; <span class='where'>where B::CC: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/common/convolution/struct.ConvolutionConfig.html' title='leaf::layers::common::convolution::ConvolutionConfig'>ConvolutionConfig</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/common/linear/struct.Linear.html' title='leaf::layers::common::linear::Linear'>Linear</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/common/linear/struct.LinearConfig.html' title='leaf::layers::common::linear::LinearConfig'>LinearConfig</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/common/log_softmax/struct.LogSoftmax.html' title='leaf::layers::common::log_softmax::LogSoftmax'>LogSoftmax</a>","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='collenchyma_nn/plugin/trait.Pooling.html' title='collenchyma_nn::plugin::Pooling'>Pooling</a>&lt;T&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/common/pooling/struct.Pooling.html' title='leaf::layers::common::pooling::Pooling'>Pooling</a>&lt;T, B&gt; <span class='where'>where B::CPOOL: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/common/pooling/struct.PoolingConfig.html' title='leaf::layers::common::pooling::PoolingConfig'>PoolingConfig</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='leaf/layers/common/pooling/enum.PoolingMode.html' title='leaf::layers::common::pooling::PoolingMode'>PoolingMode</a>","impl&lt;B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='collenchyma/backend/trait.IBackend.html' title='collenchyma::backend::IBackend'>IBackend</a> + <a class='trait' href='leaf/util/trait.LayerOps.html' title='leaf::util::LayerOps'>LayerOps</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a>&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/common/sequential/struct.Sequential.html' title='leaf::layers::common::sequential::Sequential'>Sequential</a>&lt;B&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/common/sequential/struct.SequentialConfig.html' title='leaf::layers::common::sequential::SequentialConfig'>SequentialConfig</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/common/softmax/struct.Softmax.html' title='leaf::layers::common::softmax::Softmax'>Softmax</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/loss/negative_log_likelihood/struct.NegativeLogLikelihood.html' title='leaf::layers::loss::negative_log_likelihood::NegativeLogLikelihood'>NegativeLogLikelihood</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/loss/negative_log_likelihood/struct.NegativeLogLikelihoodConfig.html' title='leaf::layers::loss::negative_log_likelihood::NegativeLogLikelihoodConfig'>NegativeLogLikelihoodConfig</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/utility/flatten/struct.Flatten.html' title='leaf::layers::utility::flatten::Flatten'>Flatten</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/utility/reshape/struct.Reshape.html' title='leaf::layers::utility::reshape::Reshape'>Reshape</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/layers/utility/reshape/struct.ReshapeConfig.html' title='leaf::layers::utility::reshape::ReshapeConfig'>ReshapeConfig</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/solver/confusion_matrix/struct.ConfusionMatrix.html' title='leaf::solver::confusion_matrix::ConfusionMatrix'>ConfusionMatrix</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/solver/confusion_matrix/struct.Sample.html' title='leaf::solver::confusion_matrix::Sample'>Sample</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/solver/confusion_matrix/struct.Accuracy.html' title='leaf::solver::confusion_matrix::Accuracy'>Accuracy</a>","impl&lt;SolverB: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='collenchyma/backend/trait.IBackend.html' title='collenchyma::backend::IBackend'>IBackend</a> + <a class='trait' href='leaf/util/trait.SolverOps.html' title='leaf::util::SolverOps'>SolverOps</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a>&gt;, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='collenchyma/backend/trait.IBackend.html' title='collenchyma::backend::IBackend'>IBackend</a> + <a class='trait' href='leaf/util/trait.LayerOps.html' title='leaf::util::LayerOps'>LayerOps</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a>&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/solver/struct.Solver.html' title='leaf::solver::Solver'>Solver</a>&lt;SolverB, B&gt;","impl&lt;SolverB, B: <a class='trait' href='collenchyma/backend/trait.IBackend.html' title='collenchyma::backend::IBackend'>IBackend</a> + <a class='trait' href='leaf/util/trait.LayerOps.html' title='leaf::util::LayerOps'>LayerOps</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a>&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='trait' href='leaf/solver/trait.ISolver.html' title='leaf::solver::ISolver'>ISolver</a>&lt;SolverB, B&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/solver/struct.SolverConfig.html' title='leaf::solver::SolverConfig'>SolverConfig</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='leaf/solver/enum.SolverKind.html' title='leaf::solver::SolverKind'>SolverKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='leaf/solver/enum.SGDKind.html' title='leaf::solver::SGDKind'>SGDKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='leaf/solver/enum.LRPolicy.html' title='leaf::solver::LRPolicy'>LRPolicy</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='leaf/solver/enum.RegularizationMethod.html' title='leaf::solver::RegularizationMethod'>RegularizationMethod</a>","impl&lt;SolverB: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='collenchyma/backend/trait.IBackend.html' title='collenchyma::backend::IBackend'>IBackend</a> + <a class='trait' href='leaf/util/trait.SolverOps.html' title='leaf::util::SolverOps'>SolverOps</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a>&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/solvers/sgd/momentum/struct.Momentum.html' title='leaf::solvers::sgd::momentum::Momentum'>Momentum</a>&lt;SolverB&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='leaf/weight/struct.WeightConfig.html' title='leaf::weight::WeightConfig'>WeightConfig</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='leaf/weight/enum.DimCheckMode.html' title='leaf::weight::DimCheckMode'>DimCheckMode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='leaf/weight/enum.FillerType.html' title='leaf::weight::FillerType'>FillerType</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
