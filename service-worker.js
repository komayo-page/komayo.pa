<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Action Controller: Exception caught</title>
  <style>
    body {
      background-color: #FAFAFA;
      color: #333;
      color-scheme: light dark;
      supported-color-schemes: light dark;
      margin: 0px;
    }

    body, p, ol, ul, td {
      font-family: helvetica, verdana, arial, sans-serif;
      font-size:   13px;
      line-height: 18px;
    }

    pre {
      font-size: 11px;
      white-space: pre-wrap;
    }

    pre.box {
      border: 1px solid #EEE;
      padding: 10px;
      margin: 0px;
      width: 958px;
    }

    header {
      color: #F0F0F0;
      background: #C00;
      padding: 0.5em 1.5em;
    }

    h1 {
      overflow-wrap: break-word;
      margin: 0.2em 0;
      line-height: 1.1em;
      font-size: 2em;
    }

    h2 {
      color: #C00;
      line-height: 25px;
    }

    code.traces {
      font-size: 11px;
    }

    .response-heading, .request-heading {
      margin-top: 30px;
    }

    .exception-message {
      padding: 8px 0;
    }

    .exception-message .message {
      margin-bottom: 8px;
      line-height: 25px;
      font-size: 1.5em;
      font-weight: bold;
      color: #C00;
    }

    .details {
      border: 1px solid #D0D0D0;
      border-radius: 4px;
      margin: 1em 0px;
      display: block;
      max-width: 978px;
    }

    .summary {
      padding: 8px 15px;
      border-bottom: 1px solid #D0D0D0;
      display: block;
    }

    a.summary {
      color: #F0F0F0;
      text-decoration: none;
      background: #C52F24;
      border-bottom: none;
    }

    .details pre {
      margin: 5px;
      border: none;
    }

    #container {
      box-sizing: border-box;
      width: 100%;
      padding: 0 1.5em;
    }

    .source * {
      margin: 0px;
      padding: 0px;
    }

    .source {
      border: 1px solid #D9D9D9;
      background: #ECECEC;
      max-width: 978px;
    }

    .source pre {
      padding: 10px 0px;
      border: none;
    }

    .source .data {
      font-size: 80%;
      overflow: auto;
      background-color: #FFF;
    }

    .info {
      padding: 0.5em;
    }

    .source .data .line_numbers {
      background-color: #ECECEC;
      color: #555;
      padding: 1em .5em;
      border-right: 1px solid #DDD;
      text-align: right;
    }

    .line {
      padding-left: 10px;
      white-space: pre;
    }

    .line:hover {
      background-color: #F6F6F6;
    }

    .line.active {
      background-color: #FCC;
    }

    .button_to {
      display: inline-block;
      margin-top: 0.75em;
      margin-bottom: 0.75em;
    }

    .hidden {
      display: none;
    }

    .correction {
      list-style-type: none;
    }

    input[type="submit"] {
      color: white;
      background-color: #C00;
      border: none;
      border-radius: 12px;
      box-shadow: 0 3px #F99;
      font-size: 13px;
      font-weight: bold;
      margin: 0;
      padding: 10px 18px;
      cursor: pointer;
      -webkit-appearance: none;
    }
    input[type="submit"]:focus,
    input[type="submit"]:hover {
      opacity: 0.8;
    }
    input[type="submit"]:active {
      box-shadow: 0 2px #F99;
      transform: translateY(1px)
    }

    a { color: #980905; }
    a:visited { color: #666; }
    a.trace-frames {
      color: #666;
      overflow-wrap: break-word;
    }
    a:hover, a.trace-frames.selected { color: #C00; }
    a.summary:hover { color: #FFF; }

    @media (prefers-color-scheme: dark) {
      body {
        background-color: #222;
        color: #ECECEC;
      }

      .details, .summary {
        border-color: #666;
      }

      .source {
        border-color: #555;
        background-color: #333;
      }

      .source .data {
        background: #444;
      }

      .source .data .line_numbers {
        background: #333;
        border-color: #222;
      }

      .line:hover {
        background: #666;
      }

      .line.active {
        background-color: #900;
      }

      input[type="submit"] {
        box-shadow: 0 3px #800;
      }
      input[type="submit"]:active {
        box-shadow: 0 2px #800;
      }

      a { color: #C00; }
      a.trace-frames { color: #999; }
      a:hover, a.trace-frames.selected { color: #E9382B; }
    }

    
  </style>

  <script>
    var toggle = function(id) {
      document.getElementById(id).classList.toggle('hidden');
      return false;
    }
    var show = function(id) {
      document.getElementById(id).style.display = 'block';
    }
    var hide = function(id) {
      document.getElementById(id).style.display = 'none';
    }
    var toggleSessionDump = function() {
      return toggle('session_dump');
    }
    var toggleEnvDump = function() {
      return toggle('env_dump');
    }
  </script>
</head>
<body>

  <header role="banner">
  <h1>
    I18n::MissingTranslationData in
    ServiceWorker#show
  </h1>
</header>

<main role="main" id="container">
  <p>
    Showing <i>/home/cyril/Code/GitHub/cyril/komayo-page/app/views/service_worker/show.js.erb</i> where line <b>#12</b> raised:
  </p>
  <pre><code>Translation missing: pa.book_slug</code></pre>

  
    <div class="source hidden" id="frame-source-0-0">
      <div class="info">
        Extracted source (around line <strong>#394</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>392</span>
<span>393</span>
<span>394</span>
<span>395</span>
<span>396</span>
<span>397</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      case handling
</div><div class="line">      when :raise
</div><div class="line active">        raise exception.respond_to?(:to_exception) ? exception.to_exception : exception
</div><div class="line">      when :throw
</div><div class="line">        throw :exception, exception
</div><div class="line">      else
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-1">
      <div class="info">
        Extracted source (around line <strong>#367</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>365</span>
<span>366</span>
<span>367</span>
<span>368</span>
<span>369</span>
<span>370</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">      if result.is_a?(MissingTranslation)
</div><div class="line active">        handle_exception((throw &amp;&amp; :throw || raise &amp;&amp; :raise), result, locale, key, options)
</div><div class="line">      else
</div><div class="line">        result
</div><div class="line">      end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-2">
      <div class="info">
        Extracted source (around line <strong>#222</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>220</span>
<span>221</span>
<span>222</span>
<span>223</span>
<span>224</span>
<span>225</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        end
</div><div class="line">      else
</div><div class="line active">        translate_key(key, throw, raise, locale, backend, options)
</div><div class="line">      end
</div><div class="line">    end
</div><div class="line">    alias :t :translate
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-3">
      <div class="info">
        Extracted source (around line <strong>#13</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>11</span>
<span>12</span>
<span>13</span>
<span>14</span>
<span>15</span>
<span>16</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        html_safe_translation(translation)
</div><div class="line">      else
</div><div class="line active">        I18n.translate(key, **options)
</div><div class="line">      end
</div><div class="line">    end
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-4">
      <div class="info">
        Extracted source (around line <strong>#91</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>89</span>
<span>90</span>
<span>91</span>
<span>92</span>
<span>93</span>
<span>94</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">          key = scope_key_by_partial(key)
</div><div class="line">
</div><div class="line active">          translated = ActiveSupport::HtmlSafeTranslation.translate(key, **options, default: default)
</div><div class="line">
</div><div class="line">          break translated unless translated == MISSING_TRANSLATION
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source " id="frame-source-0-5">
      <div class="info">
        Extracted source (around line <strong>#12</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>10</span>
<span>11</span>
<span>12</span>
<span>13</span>
<span>14</span>
<span>15</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        &#39;/&lt;%= t(:article_body_img_src) %&gt;.png&#39;,
</div><div class="line">        &#39;/&lt;%= t(:article_body_img_src) %&gt;.webp&#39;,
</div><div class="line active">        &#39;/&lt;%= t(:book_slug) %&gt;/&#39;,
</div><div class="line">        &lt;% if available_book_for?(locale: I18n.locale) %&gt;
</div><div class="line">          &lt;% t(:book_chapter_img_srcs).each do |book_chapter_img_src| %&gt;
</div><div class="line">            &#39;/&lt;%= t(:book_slug) %&gt;/&lt;%= book_chapter_img_src %&gt;.webp&#39;,
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-6">
      <div class="info">
        Extracted source (around line <strong>#244</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>242</span>
<span>243</span>
<span>244</span>
<span>245</span>
<span>246</span>
<span>247</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      @current_template = template if add_to_stack
</div><div class="line">      @output_buffer = buffer
</div><div class="line active">      public_send(method, locals, buffer, &amp;block)
</div><div class="line">    ensure
</div><div class="line">      @output_buffer, @virtual_path, @current_template = _old_output_buffer, _old_virtual_path, _old_template
</div><div class="line">    end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-7">
      <div class="info">
        Extracted source (around line <strong>#244</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>242</span>
<span>243</span>
<span>244</span>
<span>245</span>
<span>246</span>
<span>247</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      @current_template = template if add_to_stack
</div><div class="line">      @output_buffer = buffer
</div><div class="line active">      public_send(method, locals, buffer, &amp;block)
</div><div class="line">    ensure
</div><div class="line">      @output_buffer, @virtual_path, @current_template = _old_output_buffer, _old_virtual_path, _old_template
</div><div class="line">    end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-8">
      <div class="info">
        Extracted source (around line <strong>#157</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>155</span>
<span>156</span>
<span>157</span>
<span>158</span>
<span>159</span>
<span>160</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      instrument_render_template do
</div><div class="line">        compile!(view)
</div><div class="line active">        view._run(method_name, self, locals, buffer, add_to_stack: add_to_stack, &amp;block)
</div><div class="line">      end
</div><div class="line">    rescue =&gt; e
</div><div class="line">      handle_render_error(view, e)
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-9">
      <div class="info">
        Extracted source (around line <strong>#208</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>206</span>
<span>207</span>
<span>208</span>
<span>209</span>
<span>210</span>
<span>211</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">          instrumenter.instrument(name, payload) { yield payload if block_given? }
</div><div class="line">        else
</div><div class="line active">          yield payload if block_given?
</div><div class="line">        end
</div><div class="line">      end
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-10">
      <div class="info">
        Extracted source (around line <strong>#361</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>359</span>
<span>360</span>
<span>361</span>
<span>362</span>
<span>363</span>
<span>364</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">      def instrument_render_template(&amp;block)
</div><div class="line active">        ActiveSupport::Notifications.instrument(&quot;!render_template.action_view&quot;, instrument_payload, &amp;block)
</div><div class="line">      end
</div><div class="line">
</div><div class="line">      def instrument_payload
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-11">
      <div class="info">
        Extracted source (around line <strong>#155</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>153</span>
<span>154</span>
<span>155</span>
<span>156</span>
<span>157</span>
<span>158</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    # consume this in production. This is only slow if it&#39;s being listened to.
</div><div class="line">    def render(view, locals, buffer = ActionView::OutputBuffer.new, add_to_stack: true, &amp;block)
</div><div class="line active">      instrument_render_template do
</div><div class="line">        compile!(view)
</div><div class="line">        view._run(method_name, self, locals, buffer, add_to_stack: add_to_stack, &amp;block)
</div><div class="line">      end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-12">
      <div class="info">
        Extracted source (around line <strong>#65</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>63</span>
<span>64</span>
<span>65</span>
<span>66</span>
<span>67</span>
<span>68</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">            layout: layout &amp;&amp; layout.virtual_path
</div><div class="line">          ) do
</div><div class="line active">            template.render(view, locals) { |*name| view._layout_for(*name) }
</div><div class="line">          end
</div><div class="line">        end
</div><div class="line">      end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-13">
      <div class="info">
        Extracted source (around line <strong>#206</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>204</span>
<span>205</span>
<span>206</span>
<span>207</span>
<span>208</span>
<span>209</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def instrument(name, payload = {})
</div><div class="line">        if notifier.listening?(name)
</div><div class="line active">          instrumenter.instrument(name, payload) { yield payload if block_given? }
</div><div class="line">        else
</div><div class="line">          yield payload if block_given?
</div><div class="line">        end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-14">
      <div class="info">
        Extracted source (around line <strong>#24</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>22</span>
<span>23</span>
<span>24</span>
<span>25</span>
<span>26</span>
<span>27</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        listeners_state = start name, payload
</div><div class="line">        begin
</div><div class="line active">          yield payload if block_given?
</div><div class="line">        rescue Exception =&gt; e
</div><div class="line">          payload[:exception] = [e.class.name, e.message]
</div><div class="line">          payload[:exception_object] = e
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-15">
      <div class="info">
        Extracted source (around line <strong>#206</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>204</span>
<span>205</span>
<span>206</span>
<span>207</span>
<span>208</span>
<span>209</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def instrument(name, payload = {})
</div><div class="line">        if notifier.listening?(name)
</div><div class="line active">          instrumenter.instrument(name, payload) { yield payload if block_given? }
</div><div class="line">        else
</div><div class="line">          yield payload if block_given?
</div><div class="line">        end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-16">
      <div class="info">
        Extracted source (around line <strong>#60</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>58</span>
<span>59</span>
<span>60</span>
<span>61</span>
<span>62</span>
<span>63</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def render_template(view, template, layout_name, locals)
</div><div class="line">        render_with_layout(view, template, layout_name, locals) do |layout|
</div><div class="line active">          ActiveSupport::Notifications.instrument(
</div><div class="line">            &quot;render_template.action_view&quot;,
</div><div class="line">            identifier: template.identifier,
</div><div class="line">            layout: layout &amp;&amp; layout.virtual_path
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-17">
      <div class="info">
        Extracted source (around line <strong>#79</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>77</span>
<span>78</span>
<span>79</span>
<span>80</span>
<span>81</span>
<span>82</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">          end
</div><div class="line">        else
</div><div class="line active">          yield
</div><div class="line">        end
</div><div class="line">        build_rendered_template(body, template)
</div><div class="line">      end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-18">
      <div class="info">
        Extracted source (around line <strong>#59</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>57</span>
<span>58</span>
<span>59</span>
<span>60</span>
<span>61</span>
<span>62</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      # supplied as well.
</div><div class="line">      def render_template(view, template, layout_name, locals)
</div><div class="line active">        render_with_layout(view, template, layout_name, locals) do |layout|
</div><div class="line">          ActiveSupport::Notifications.instrument(
</div><div class="line">            &quot;render_template.action_view&quot;,
</div><div class="line">            identifier: template.identifier,
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-19">
      <div class="info">
        Extracted source (around line <strong>#11</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>9</span>
<span>10</span>
<span>11</span>
<span>12</span>
<span>13</span>
<span>14</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      prepend_formats(template.format)
</div><div class="line">
</div><div class="line active">      render_template(context, template, options[:layout], options[:locals] || {})
</div><div class="line">    end
</div><div class="line">
</div><div class="line">    private
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-20">
      <div class="info">
        Extracted source (around line <strong>#61</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>59</span>
<span>60</span>
<span>61</span>
<span>62</span>
<span>63</span>
<span>64</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">    def render_template_to_object(context, options) # :nodoc:
</div><div class="line active">      TemplateRenderer.new(@lookup_context).render(context, options)
</div><div class="line">    end
</div><div class="line">
</div><div class="line">    def render_partial_to_object(context, options, &amp;block) # :nodoc:
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-21">
      <div class="info">
        Extracted source (around line <strong>#29</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>27</span>
<span>28</span>
<span>29</span>
<span>30</span>
<span>31</span>
<span>32</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        render_partial_to_object(context, options)
</div><div class="line">      else
</div><div class="line active">        render_template_to_object(context, options)
</div><div class="line">      end
</div><div class="line">    end
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-22">
      <div class="info">
        Extracted source (around line <strong>#117</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>115</span>
<span>116</span>
<span>117</span>
<span>118</span>
<span>119</span>
<span>120</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">        rendered_template = context.in_rendering_context(options) do |renderer|
</div><div class="line active">          renderer.render_to_object(context, options)
</div><div class="line">        end
</div><div class="line">
</div><div class="line">        rendered_format = rendered_template.format || lookup_context.formats.first
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-23">
      <div class="info">
        Extracted source (around line <strong>#270</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>268</span>
<span>269</span>
<span>270</span>
<span>271</span>
<span>272</span>
<span>273</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      end
</div><div class="line">
</div><div class="line active">      yield @view_renderer
</div><div class="line">    ensure
</div><div class="line">      @view_renderer = old_view_renderer
</div><div class="line">      @lookup_context = old_lookup_context
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-24">
      <div class="info">
        Extracted source (around line <strong>#116</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>114</span>
<span>115</span>
<span>116</span>
<span>117</span>
<span>118</span>
<span>119</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        lookup_context.variants = variant if variant
</div><div class="line">
</div><div class="line active">        rendered_template = context.in_rendering_context(options) do |renderer|
</div><div class="line">          renderer.render_to_object(context, options)
</div><div class="line">        end
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-25">
      <div class="info">
        Extracted source (around line <strong>#216</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>214</span>
<span>215</span>
<span>216</span>
<span>217</span>
<span>218</span>
<span>219</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">          Rack::Chunked::Body.new view_renderer.render_body(view_context, options)
</div><div class="line">        else
</div><div class="line active">          super
</div><div class="line">        end
</div><div class="line">      end
</div><div class="line">  end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-26">
      <div class="info">
        Extracted source (around line <strong>#103</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>101</span>
<span>102</span>
<span>103</span>
<span>104</span>
<span>105</span>
<span>106</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def render_to_body(options = {})
</div><div class="line">      _process_options(options)
</div><div class="line active">      _render_template(options)
</div><div class="line">    end
</div><div class="line">
</div><div class="line">    private
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-27">
      <div class="info">
        Extracted source (around line <strong>#158</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>156</span>
<span>157</span>
<span>158</span>
<span>159</span>
<span>160</span>
<span>161</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">    def render_to_body(options = {}) # :nodoc:
</div><div class="line active">      super || _render_in_priorities(options) || &quot; &quot;
</div><div class="line">    end
</div><div class="line">
</div><div class="line">    private
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-28">
      <div class="info">
        Extracted source (around line <strong>#141</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>139</span>
<span>140</span>
<span>141</span>
<span>142</span>
<span>143</span>
<span>144</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    # &lt;tt&gt;ActionView::Rendering.render_to_body&lt;/tt&gt;, if present.
</div><div class="line">    def render_to_body(options)
</div><div class="line active">      _render_to_body_with_renderer(options) || super
</div><div class="line">    end
</div><div class="line">
</div><div class="line">    def _render_to_body_with_renderer(options)
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-29">
      <div class="info">
        Extracted source (around line <strong>#27</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
<span>29</span>
<span>30</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def render(*args, &amp;block)
</div><div class="line">      options = _normalize_render(*args, &amp;block)
</div><div class="line active">      rendered_body = render_to_body(options)
</div><div class="line">      if options[:html]
</div><div class="line">        _set_html_content_type
</div><div class="line">      else
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-30">
      <div class="info">
        Extracted source (around line <strong>#139</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>137</span>
<span>138</span>
<span>139</span>
<span>140</span>
<span>141</span>
<span>142</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def render(*args)
</div><div class="line">      raise ::AbstractController::DoubleRenderError if response_body
</div><div class="line active">      super
</div><div class="line">    end
</div><div class="line">
</div><div class="line">    # Similar to #render, but only returns the rendered template as a string,
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-31">
      <div class="info">
        Extracted source (around line <strong>#22</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>20</span>
<span>21</span>
<span>22</span>
<span>23</span>
<span>24</span>
<span>25</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      render_output = nil
</div><div class="line">      self.view_runtime = cleanup_view_runtime do
</div><div class="line active">        Benchmark.ms { render_output = super }
</div><div class="line">      end
</div><div class="line">      render_output
</div><div class="line">    end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-32">
      <div class="info">
        Extracted source (around line <strong>#311</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>309</span>
<span>310</span>
<span>311</span>
<span>312</span>
<span>313</span>
<span>314</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">  def realtime # :yield:
</div><div class="line">    r0 = Process.clock_gettime(Process::CLOCK_MONOTONIC)
</div><div class="line active">    yield
</div><div class="line">    Process.clock_gettime(Process::CLOCK_MONOTONIC) - r0
</div><div class="line">  end
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-33">
      <div class="info">
        Extracted source (around line <strong>#14</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>12</span>
<span>13</span>
<span>14</span>
<span>15</span>
<span>16</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">  #   # =&gt; 0.074
</div><div class="line">  def ms(&amp;block)
</div><div class="line active">    1000 * realtime(&amp;block)
</div><div class="line">  end
</div><div class="line">end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-34">
      <div class="info">
        Extracted source (around line <strong>#22</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>20</span>
<span>21</span>
<span>22</span>
<span>23</span>
<span>24</span>
<span>25</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      render_output = nil
</div><div class="line">      self.view_runtime = cleanup_view_runtime do
</div><div class="line active">        Benchmark.ms { render_output = super }
</div><div class="line">      end
</div><div class="line">      render_output
</div><div class="line">    end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-35">
      <div class="info">
        Extracted source (around line <strong>#91</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>89</span>
<span>90</span>
<span>91</span>
<span>92</span>
<span>93</span>
<span>94</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      #   end
</div><div class="line">      def cleanup_view_runtime # :doc:
</div><div class="line active">        yield
</div><div class="line">      end
</div><div class="line">
</div><div class="line">      # Every time after an action is processed, this method is invoked
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-36">
      <div class="info">
        Extracted source (around line <strong>#34</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>32</span>
<span>33</span>
<span>34</span>
<span>35</span>
<span>36</span>
<span>37</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">            db_rt_before_render = ActiveRecord::LogSubscriber.reset_runtime
</div><div class="line">            self.db_runtime = (db_runtime || 0) + db_rt_before_render
</div><div class="line active">            runtime = super
</div><div class="line">            db_rt_after_render = ActiveRecord::LogSubscriber.reset_runtime
</div><div class="line">            self.db_runtime += db_rt_after_render
</div><div class="line">            runtime - db_rt_after_render
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-37">
      <div class="info">
        Extracted source (around line <strong>#21</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>19</span>
<span>20</span>
<span>21</span>
<span>22</span>
<span>23</span>
<span>24</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def render(*)
</div><div class="line">      render_output = nil
</div><div class="line active">      self.view_runtime = cleanup_view_runtime do
</div><div class="line">        Benchmark.ms { render_output = super }
</div><div class="line">      end
</div><div class="line">      render_output
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-38">
      <div class="info">
        Extracted source (around line <strong>#35</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>33</span>
<span>34</span>
<span>35</span>
<span>36</span>
<span>37</span>
<span>38</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def default_render
</div><div class="line">      if template_exists?(action_name.to_s, _prefixes, variants: request.variant)
</div><div class="line active">        render
</div><div class="line">      elsif any_templates?(action_name.to_s, _prefixes)
</div><div class="line">        message = &quot;#{self.class.name}\##{action_name} is missing a template &quot; \
</div><div class="line">          &quot;for this request format and variant.\n&quot; \
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-39">
      <div class="info">
        Extracted source (around line <strong>#7</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>5</span>
<span>6</span>
<span>7</span>
<span>8</span>
<span>9</span>
<span>10</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def send_action(method, *args)
</div><div class="line">      ret = super
</div><div class="line active">      default_render unless performed?
</div><div class="line">      ret
</div><div class="line">    end
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-40">
      <div class="info">
        Extracted source (around line <strong>#215</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>213</span>
<span>214</span>
<span>215</span>
<span>216</span>
<span>217</span>
<span>218</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      # which is *not* necessarily the same as the action name.
</div><div class="line">      def process_action(...)
</div><div class="line active">        send_action(...)
</div><div class="line">      end
</div><div class="line">
</div><div class="line">      # Actually call the method associated with the action. Override
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-41">
      <div class="info">
        Extracted source (around line <strong>#165</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>163</span>
<span>164</span>
<span>165</span>
<span>166</span>
<span>167</span>
<span>168</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def process_action(*) # :nodoc:
</div><div class="line">        self.formats = request.formats.filter_map(&amp;:ref)
</div><div class="line active">        super
</div><div class="line">      end
</div><div class="line">
</div><div class="line">      def _process_variant(options)
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-42">
      <div class="info">
        Extracted source (around line <strong>#234</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>232</span>
<span>233</span>
<span>234</span>
<span>235</span>
<span>236</span>
<span>237</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def process_action(...)
</div><div class="line">        run_callbacks(:process_action) do
</div><div class="line active">          super
</div><div class="line">        end
</div><div class="line">      end
</div><div class="line">  end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-43">
      <div class="info">
        Extracted source (around line <strong>#107</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>105</span>
<span>106</span>
<span>107</span>
<span>108</span>
<span>109</span>
<span>110</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        if next_sequence.final?
</div><div class="line">          next_sequence.invoke_before(env)
</div><div class="line active">          env.value = !env.halted &amp;&amp; (!block_given? || yield)
</div><div class="line">          next_sequence.invoke_after(env)
</div><div class="line">          env.value
</div><div class="line">        else
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-44">
      <div class="info">
        Extracted source (around line <strong>#233</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>231</span>
<span>232</span>
<span>233</span>
<span>234</span>
<span>235</span>
<span>236</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      # &lt;tt&gt;process_action&lt;/tt&gt; callbacks around the normal behavior.
</div><div class="line">      def process_action(...)
</div><div class="line active">        run_callbacks(:process_action) do
</div><div class="line">          super
</div><div class="line">        end
</div><div class="line">      end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-45">
      <div class="info">
        Extracted source (around line <strong>#23</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>21</span>
<span>22</span>
<span>23</span>
<span>24</span>
<span>25</span>
<span>26</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    private
</div><div class="line">      def process_action(*)
</div><div class="line active">        super
</div><div class="line">      rescue Exception =&gt; exception
</div><div class="line">        request.env[&quot;action_dispatch.show_detailed_exceptions&quot;] ||= show_detailed_exceptions?
</div><div class="line">        rescue_with_handler(exception) || raise
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-46">
      <div class="info">
        Extracted source (around line <strong>#67</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>65</span>
<span>66</span>
<span>67</span>
<span>68</span>
<span>69</span>
<span>70</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">        ActiveSupport::Notifications.instrument(&quot;process_action.action_controller&quot;, raw_payload) do |payload|
</div><div class="line active">          result = super
</div><div class="line">          payload[:response] = response
</div><div class="line">          payload[:status]   = response.status
</div><div class="line">          result
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-47">
      <div class="info">
        Extracted source (around line <strong>#206</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>204</span>
<span>205</span>
<span>206</span>
<span>207</span>
<span>208</span>
<span>209</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def instrument(name, payload = {})
</div><div class="line">        if notifier.listening?(name)
</div><div class="line active">          instrumenter.instrument(name, payload) { yield payload if block_given? }
</div><div class="line">        else
</div><div class="line">          yield payload if block_given?
</div><div class="line">        end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-48">
      <div class="info">
        Extracted source (around line <strong>#24</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>22</span>
<span>23</span>
<span>24</span>
<span>25</span>
<span>26</span>
<span>27</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        listeners_state = start name, payload
</div><div class="line">        begin
</div><div class="line active">          yield payload if block_given?
</div><div class="line">        rescue Exception =&gt; e
</div><div class="line">          payload[:exception] = [e.class.name, e.message]
</div><div class="line">          payload[:exception_object] = e
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-49">
      <div class="info">
        Extracted source (around line <strong>#206</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>204</span>
<span>205</span>
<span>206</span>
<span>207</span>
<span>208</span>
<span>209</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def instrument(name, payload = {})
</div><div class="line">        if notifier.listening?(name)
</div><div class="line active">          instrumenter.instrument(name, payload) { yield payload if block_given? }
</div><div class="line">        else
</div><div class="line">          yield payload if block_given?
</div><div class="line">        end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-50">
      <div class="info">
        Extracted source (around line <strong>#66</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>64</span>
<span>65</span>
<span>66</span>
<span>67</span>
<span>68</span>
<span>69</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        ActiveSupport::Notifications.instrument(&quot;start_processing.action_controller&quot;, raw_payload)
</div><div class="line">
</div><div class="line active">        ActiveSupport::Notifications.instrument(&quot;process_action.action_controller&quot;, raw_payload) do |payload|
</div><div class="line">          result = super
</div><div class="line">          payload[:response] = response
</div><div class="line">          payload[:status]   = response.status
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-51">
      <div class="info">
        Extracted source (around line <strong>#259</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>257</span>
<span>258</span>
<span>259</span>
<span>260</span>
<span>261</span>
<span>262</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def process_action(*)
</div><div class="line">        _perform_parameter_wrapping if _wrapper_enabled?
</div><div class="line active">        super
</div><div class="line">      end
</div><div class="line">
</div><div class="line">      # Returns the wrapper key which will be used to store wrapped parameters.
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-52">
      <div class="info">
        Extracted source (around line <strong>#27</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
<span>29</span>
<span>30</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">          # and it won&#39;t be cleaned up by the method below.
</div><div class="line">          ActiveRecord::LogSubscriber.reset_runtime
</div><div class="line active">          super
</div><div class="line">        end
</div><div class="line">
</div><div class="line">        def cleanup_view_runtime
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-53">
      <div class="info">
        Extracted source (around line <strong>#151</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>149</span>
<span>150</span>
<span>151</span>
<span>152</span>
<span>153</span>
<span>154</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      @_response_body = nil
</div><div class="line">
</div><div class="line active">      process_action(action_name, *args)
</div><div class="line">    end
</div><div class="line">    ruby2_keywords(:process)
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-54">
      <div class="info">
        Extracted source (around line <strong>#39</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>37</span>
<span>38</span>
<span>39</span>
<span>40</span>
<span>41</span>
<span>42</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def process(...) # :nodoc:
</div><div class="line">      old_config, I18n.config = I18n.config, I18nProxy.new(I18n.config, lookup_context)
</div><div class="line active">      super
</div><div class="line">    ensure
</div><div class="line">      I18n.config = old_config
</div><div class="line">    end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-55">
      <div class="info">
        Extracted source (around line <strong>#188</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>186</span>
<span>187</span>
<span>188</span>
<span>189</span>
<span>190</span>
<span>191</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      set_request!(request)
</div><div class="line">      set_response!(response)
</div><div class="line active">      process(name)
</div><div class="line">      request.commit_flash
</div><div class="line">      to_a
</div><div class="line">    end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-56">
      <div class="info">
        Extracted source (around line <strong>#251</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>249</span>
<span>250</span>
<span>251</span>
<span>252</span>
<span>253</span>
<span>254</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        middleware_stack.build(name) { |env| new.dispatch(name, req, res) }.call req.env
</div><div class="line">      else
</div><div class="line active">        new.dispatch(name, req, res)
</div><div class="line">      end
</div><div class="line">    end
</div><div class="line">  end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-57">
      <div class="info">
        Extracted source (around line <strong>#49</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>47</span>
<span>48</span>
<span>49</span>
<span>50</span>
<span>51</span>
<span>52</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">        def dispatch(controller, action, req, res)
</div><div class="line active">          controller.dispatch(action, req, res)
</div><div class="line">        end
</div><div class="line">      end
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-58">
      <div class="info">
        Extracted source (around line <strong>#32</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>30</span>
<span>31</span>
<span>32</span>
<span>33</span>
<span>34</span>
<span>35</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">          controller = controller req
</div><div class="line">          res        = controller.make_response! req
</div><div class="line active">          dispatch(controller, params[:action], req, res)
</div><div class="line">        rescue ActionController::RoutingError
</div><div class="line">          if @raise_on_name_error
</div><div class="line">            raise
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-59">
      <div class="info">
        Extracted source (around line <strong>#50</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>48</span>
<span>49</span>
<span>50</span>
<span>51</span>
<span>52</span>
<span>53</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">          req.path_parameters = tmp_params
</div><div class="line">
</div><div class="line active">          status, headers, body = route.app.serve(req)
</div><div class="line">
</div><div class="line">          if &quot;pass&quot; == headers[&quot;X-Cascade&quot;]
</div><div class="line">            req.script_name     = script_name
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-60">
      <div class="info">
        Extracted source (around line <strong>#32</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>30</span>
<span>31</span>
<span>32</span>
<span>33</span>
<span>34</span>
<span>35</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">      def serve(req)
</div><div class="line active">        find_routes(req).each do |match, parameters, route|
</div><div class="line">          set_params  = req.path_parameters
</div><div class="line">          path_info   = req.path_info
</div><div class="line">          script_name = req.script_name
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-61">
      <div class="info">
        Extracted source (around line <strong>#32</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>30</span>
<span>31</span>
<span>32</span>
<span>33</span>
<span>34</span>
<span>35</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">      def serve(req)
</div><div class="line active">        find_routes(req).each do |match, parameters, route|
</div><div class="line">          set_params  = req.path_parameters
</div><div class="line">          path_info   = req.path_info
</div><div class="line">          script_name = req.script_name
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-62">
      <div class="info">
        Extracted source (around line <strong>#852</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>850</span>
<span>851</span>
<span>852</span>
<span>853</span>
<span>854</span>
<span>855</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        req = make_request(env)
</div><div class="line">        req.path_info = Journey::Router::Utils.normalize_path(req.path_info)
</div><div class="line active">        @router.serve(req)
</div><div class="line">      end
</div><div class="line">
</div><div class="line">      def recognize_path(path, environment = {})
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-63">
      <div class="info">
        Extracted source (around line <strong>#15</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>13</span>
<span>14</span>
<span>15</span>
<span>16</span>
<span>17</span>
<span>18</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def call(env)
</div><div class="line">      env[RACK_TEMPFILES] ||= []
</div><div class="line active">      status, headers, body = @app.call(env)
</div><div class="line">      body_proxy = BodyProxy.new(body) do
</div><div class="line">        env[RACK_TEMPFILES].each(&amp;:close!) unless env[RACK_TEMPFILES].nil?
</div><div class="line">      end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-64">
      <div class="info">
        Extracted source (around line <strong>#27</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
<span>29</span>
<span>30</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">    def call(env)
</div><div class="line active">      status, headers, body = @app.call(env)
</div><div class="line">
</div><div class="line">      headers = Utils::HeaderHash[headers]
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-65">
      <div class="info">
        Extracted source (around line <strong>#27</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
<span>29</span>
<span>30</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      case env[REQUEST_METHOD]
</div><div class="line">      when &quot;GET&quot;, &quot;HEAD&quot;
</div><div class="line active">        status, headers, body = @app.call(env)
</div><div class="line">        headers = Utils::HeaderHash[headers]
</div><div class="line">        if status == 200 &amp;&amp; fresh?(env, headers)
</div><div class="line">          status = 304
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-66">
      <div class="info">
        Extracted source (around line <strong>#12</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>10</span>
<span>11</span>
<span>12</span>
<span>13</span>
<span>14</span>
<span>15</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">    def call(env)
</div><div class="line active">      status, headers, body = @app.call(env)
</div><div class="line">
</div><div class="line">      if env[REQUEST_METHOD] == HEAD
</div><div class="line">        [
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-67">
      <div class="info">
        Extracted source (around line <strong>#38</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>36</span>
<span>37</span>
<span>38</span>
<span>39</span>
<span>40</span>
<span>41</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def call(env)
</div><div class="line">        request = ActionDispatch::Request.new(env)
</div><div class="line active">        _, headers, _ = response = @app.call(env)
</div><div class="line">
</div><div class="line">        return response unless html_response?(headers)
</div><div class="line">        return response if policy_present?(headers)
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-68">
      <div class="info">
        Extracted source (around line <strong>#36</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>34</span>
<span>35</span>
<span>36</span>
<span>37</span>
<span>38</span>
<span>39</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def call(env)
</div><div class="line">        request = ActionDispatch::Request.new env
</div><div class="line active">        status, headers, _ = response = @app.call(env)
</div><div class="line">
</div><div class="line">        # Returning CSP headers with a 304 Not Modified is harmful, since nonces in the new
</div><div class="line">        # CSP headers might not match nonces in the cached HTML.
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-69">
      <div class="info">
        Extracted source (around line <strong>#266</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>264</span>
<span>265</span>
<span>266</span>
<span>267</span>
<span>268</span>
<span>269</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">          req = make_request env
</div><div class="line">          prepare_session(req)
</div><div class="line active">          status, headers, body = app.call(req.env)
</div><div class="line">          res = Rack::Response::Raw.new status, headers
</div><div class="line">          commit_session(req, res)
</div><div class="line">          [status, headers, body]
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-70">
      <div class="info">
        Extracted source (around line <strong>#260</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>258</span>
<span>259</span>
<span>260</span>
<span>261</span>
<span>262</span>
<span>263</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">        def call(env)
</div><div class="line active">          context(env)
</div><div class="line">        end
</div><div class="line">
</div><div class="line">        def context(env, app = @app)
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-71">
      <div class="info">
        Extracted source (around line <strong>#704</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>702</span>
<span>703</span>
<span>704</span>
<span>705</span>
<span>706</span>
<span>707</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      request = ActionDispatch::Request.new env
</div><div class="line">
</div><div class="line active">      status, headers, body = @app.call(env)
</div><div class="line">
</div><div class="line">      if request.have_cookie_jar?
</div><div class="line">        cookie_jar = request.cookie_jar
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-72">
      <div class="info">
        Extracted source (around line <strong>#603</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>601</span>
<span>602</span>
<span>603</span>
<span>604</span>
<span>605</span>
<span>606</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        end
</div><div class="line">
</div><div class="line active">        @app.call(env)
</div><div class="line">      end
</div><div class="line">
</div><div class="line">      private
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-73">
      <div class="info">
        Extracted source (around line <strong>#27</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
<span>29</span>
<span>30</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      error = nil
</div><div class="line">      result = run_callbacks :call do
</div><div class="line active">        @app.call(env)
</div><div class="line">      rescue =&gt; error
</div><div class="line">      end
</div><div class="line">      raise error if error
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-74">
      <div class="info">
        Extracted source (around line <strong>#99</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>97</span>
<span>98</span>
<span>99</span>
<span>100</span>
<span>101</span>
<span>102</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">      if callbacks.empty?
</div><div class="line active">        yield if block_given?
</div><div class="line">      else
</div><div class="line">        env = Filters::Environment.new(self, false, nil)
</div><div class="line">        next_sequence = callbacks.compile
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-75">
      <div class="info">
        Extracted source (around line <strong>#26</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>24</span>
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
<span>29</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def call(env)
</div><div class="line">      error = nil
</div><div class="line active">      result = run_callbacks :call do
</div><div class="line">        @app.call(env)
</div><div class="line">      rescue =&gt; error
</div><div class="line">      end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-76">
      <div class="info">
        Extracted source (around line <strong>#14</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>12</span>
<span>13</span>
<span>14</span>
<span>15</span>
<span>16</span>
<span>17</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      state = @executor.run!(reset: true)
</div><div class="line">      begin
</div><div class="line active">        response = @app.call(env)
</div><div class="line">        returned = response &lt;&lt; ::Rack::BodyProxy.new(response.pop) { state.complete! }
</div><div class="line">      rescue =&gt; error
</div><div class="line">        @executor.error_reporter.report(error, handled: false)
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-77">
      <div class="info">
        Extracted source (around line <strong>#17</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>15</span>
<span>16</span>
<span>17</span>
<span>18</span>
<span>19</span>
<span>20</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def call(env)
</div><div class="line">      request = ActionDispatch::Request.new(env)
</div><div class="line active">      return @app.call(env) unless actionable_request?(request)
</div><div class="line">
</div><div class="line">      ActiveSupport::ActionableError.dispatch(request.params[:error].to_s.safe_constantize, request.params[:action])
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-78">
      <div class="info">
        Extracted source (around line <strong>#28</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>26</span>
<span>27</span>
<span>28</span>
<span>29</span>
<span>30</span>
<span>31</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def call(env)
</div><div class="line">      request = ActionDispatch::Request.new env
</div><div class="line active">      _, headers, body = response = @app.call(env)
</div><div class="line">
</div><div class="line">      if headers[&quot;X-Cascade&quot;] == &quot;pass&quot;
</div><div class="line">        body.close if body.respond_to?(:close)
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-79">
      <div class="info">
        Extracted source (around line <strong>#29</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>27</span>
<span>28</span>
<span>29</span>
<span>30</span>
<span>31</span>
<span>32</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def call(env)
</div><div class="line">      request = ActionDispatch::Request.new env
</div><div class="line active">      @app.call(env)
</div><div class="line">    rescue Exception =&gt; exception
</div><div class="line">      if request.show_exceptions?
</div><div class="line">        render_exception(request, exception)
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-80">
      <div class="info">
        Extracted source (around line <strong>#40</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>38</span>
<span>39</span>
<span>40</span>
<span>41</span>
<span>42</span>
<span>43</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">          logger.info { started_request_message(request) }
</div><div class="line active">          status, headers, body = @app.call(env)
</div><div class="line">          body = ::Rack::BodyProxy.new(body, &amp;instrumenter_finish)
</div><div class="line">          [status, headers, body]
</div><div class="line">        rescue Exception
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-81">
      <div class="info">
        Extracted source (around line <strong>#25</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>23</span>
<span>24</span>
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">        if logger.respond_to?(:tagged)
</div><div class="line active">          logger.tagged(compute_tags(request)) { call_app(request, env) }
</div><div class="line">        else
</div><div class="line">          call_app(request, env)
</div><div class="line">        end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-82">
      <div class="info">
        Extracted source (around line <strong>#99</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>97</span>
<span>98</span>
<span>99</span>
<span>100</span>
<span>101</span>
<span>102</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def tagged(*tags)
</div><div class="line">      if block_given?
</div><div class="line active">        formatter.tagged(*tags) { yield self }
</div><div class="line">      else
</div><div class="line">        logger = ActiveSupport::TaggedLogging.new(self)
</div><div class="line">        logger.formatter.extend LocalTagStorage
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-83">
      <div class="info">
        Extracted source (around line <strong>#37</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>35</span>
<span>36</span>
<span>37</span>
<span>38</span>
<span>39</span>
<span>40</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def tagged(*tags)
</div><div class="line">        new_tags = push_tags(*tags)
</div><div class="line active">        yield self
</div><div class="line">      ensure
</div><div class="line">        pop_tags(new_tags.size)
</div><div class="line">      end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-84">
      <div class="info">
        Extracted source (around line <strong>#99</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>97</span>
<span>98</span>
<span>99</span>
<span>100</span>
<span>101</span>
<span>102</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def tagged(*tags)
</div><div class="line">      if block_given?
</div><div class="line active">        formatter.tagged(*tags) { yield self }
</div><div class="line">      else
</div><div class="line">        logger = ActiveSupport::TaggedLogging.new(self)
</div><div class="line">        logger.formatter.extend LocalTagStorage
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-85">
      <div class="info">
        Extracted source (around line <strong>#25</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>23</span>
<span>24</span>
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">        if logger.respond_to?(:tagged)
</div><div class="line active">          logger.tagged(compute_tags(request)) { call_app(request, env) }
</div><div class="line">        else
</div><div class="line">          call_app(request, env)
</div><div class="line">        end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-86">
      <div class="info">
        Extracted source (around line <strong>#13</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>11</span>
<span>12</span>
<span>13</span>
<span>14</span>
<span>15</span>
<span>16</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">          ::Rails.logger.silence { @app.call(env) }
</div><div class="line">        else
</div><div class="line active">          @app.call(env)
</div><div class="line">        end
</div><div class="line">      end
</div><div class="line">    end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-87">
      <div class="info">
        Extracted source (around line <strong>#93</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>91</span>
<span>92</span>
<span>93</span>
<span>94</span>
<span>95</span>
<span>96</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      req = ActionDispatch::Request.new env
</div><div class="line">      req.remote_ip = GetIp.new(req, check_ip, proxies)
</div><div class="line active">      @app.call(req.env)
</div><div class="line">    end
</div><div class="line">
</div><div class="line">    # The GetIp class exists as a way to defer processing of the request data
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-88">
      <div class="info">
        Extracted source (around line <strong>#26</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>24</span>
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
<span>29</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      req = ActionDispatch::Request.new env
</div><div class="line">      req.request_id = make_request_id(req.headers[@header])
</div><div class="line active">      @app.call(env).tap { |_status, headers, _body| headers[@header] = req.request_id }
</div><div class="line">    end
</div><div class="line">
</div><div class="line">    private
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-89">
      <div class="info">
        Extracted source (around line <strong>#24</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>22</span>
<span>23</span>
<span>24</span>
<span>25</span>
<span>26</span>
<span>27</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      end
</div><div class="line">
</div><div class="line active">      @app.call(env)
</div><div class="line">    end
</div><div class="line">
</div><div class="line">    def method_override(env)
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-90">
      <div class="info">
        Extracted source (around line <strong>#22</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>20</span>
<span>21</span>
<span>22</span>
<span>23</span>
<span>24</span>
<span>25</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def call(env)
</div><div class="line">      start_time = Utils.clock_time
</div><div class="line active">      status, headers, body = @app.call(env)
</div><div class="line">      headers = Utils::HeaderHash[headers]
</div><div class="line">
</div><div class="line">      request_time = Utils.clock_time - start_time
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-91">
      <div class="info">
        Extracted source (around line <strong>#29</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>27</span>
<span>28</span>
<span>29</span>
<span>30</span>
<span>31</span>
<span>32</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">          def call(env)
</div><div class="line">            LocalCacheRegistry.set_cache_for(local_cache_key, LocalStore.new)
</div><div class="line active">            response = @app.call(env)
</div><div class="line">            response[2] = ::Rack::BodyProxy.new(response[2]) do
</div><div class="line">              LocalCacheRegistry.set_cache_for(local_cache_key, nil)
</div><div class="line">            end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-92">
      <div class="info">
        Extracted source (around line <strong>#61</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>59</span>
<span>60</span>
<span>61</span>
<span>62</span>
<span>63</span>
<span>64</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      response = nil
</div><div class="line">      events = @subscriber.collect_events do
</div><div class="line active">        response = @app.call(env)
</div><div class="line">      end
</div><div class="line">
</div><div class="line">      headers = response[1]
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-93">
      <div class="info">
        Extracted source (around line <strong>#26</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>24</span>
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
<span>29</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        events = []
</div><div class="line">        ActiveSupport::IsolatedExecutionState[KEY] = events
</div><div class="line active">        yield
</div><div class="line">        events
</div><div class="line">      ensure
</div><div class="line">        ActiveSupport::IsolatedExecutionState.delete(KEY)
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-94">
      <div class="info">
        Extracted source (around line <strong>#60</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>58</span>
<span>59</span>
<span>60</span>
<span>61</span>
<span>62</span>
<span>63</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def call(env)
</div><div class="line">      response = nil
</div><div class="line active">      events = @subscriber.collect_events do
</div><div class="line">        response = @app.call(env)
</div><div class="line">      end
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-95">
      <div class="info">
        Extracted source (around line <strong>#14</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>12</span>
<span>13</span>
<span>14</span>
<span>15</span>
<span>16</span>
<span>17</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      state = @executor.run!(reset: true)
</div><div class="line">      begin
</div><div class="line active">        response = @app.call(env)
</div><div class="line">        returned = response &lt;&lt; ::Rack::BodyProxy.new(response.pop) { state.complete! }
</div><div class="line">      rescue =&gt; error
</div><div class="line">        @executor.error_reporter.report(error, handled: false)
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-96">
      <div class="info">
        Extracted source (around line <strong>#23</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>21</span>
<span>22</span>
<span>23</span>
<span>24</span>
<span>25</span>
<span>26</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">    def call(env)
</div><div class="line active">      @file_handler.attempt(env) || @app.call(env)
</div><div class="line">    end
</div><div class="line">  end
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-97">
      <div class="info">
        Extracted source (around line <strong>#110</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>108</span>
<span>109</span>
<span>110</span>
<span>111</span>
<span>112</span>
<span>113</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">    def call(env)
</div><div class="line active">      status, headers, body = @app.call(env)
</div><div class="line">      if body.respond_to?(:to_path)
</div><div class="line">        case type = variation(env)
</div><div class="line">        when &#39;X-Accel-Redirect&#39;
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-98">
      <div class="info">
        Extracted source (around line <strong>#137</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>135</span>
<span>136</span>
<span>137</span>
<span>138</span>
<span>139</span>
<span>140</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      if authorized?(request) || excluded?(request)
</div><div class="line">        mark_as_authorized(request)
</div><div class="line active">        @app.call(env)
</div><div class="line">      else
</div><div class="line">        @response_app.call(env)
</div><div class="line">      end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-99">
      <div class="info">
        Extracted source (around line <strong>#530</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>528</span>
<span>529</span>
<span>530</span>
<span>531</span>
<span>532</span>
<span>533</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">    def call(env)
</div><div class="line">      req = build_request env
</div><div class="line active">      app.call req.env
</div><div class="line">    end
</div><div class="line">
</div><div class="line">    # Defines additional Rack env configuration that is added on each call.
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-100">
      <div class="info">
        Extracted source (around line <strong>#270</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>268</span>
<span>269</span>
<span>270</span>
<span>271</span>
<span>272</span>
<span>273</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      def call(env)
</div><div class="line">        env[Const::PUMA_CONFIG] = @config
</div><div class="line active">        @app.call(env)
</div><div class="line">      end
</div><div class="line">    end
</div><div class="line">
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-101">
      <div class="info">
        Extracted source (around line <strong>#100</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>98</span>
<span>99</span>
<span>100</span>
<span>101</span>
<span>102</span>
<span>103</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        if @supported_http_methods == :any || @supported_http_methods.key?(env[REQUEST_METHOD])
</div><div class="line">          status, headers, app_body = @thread_pool.with_force_shutdown do
</div><div class="line active">            @app.call(env)
</div><div class="line">          end
</div><div class="line">        else
</div><div class="line">          @log_writer.log &quot;Unsupported HTTP method used: #{env[REQUEST_METHOD]}&quot;
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-102">
      <div class="info">
        Extracted source (around line <strong>#344</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>342</span>
<span>343</span>
<span>344</span>
<span>345</span>
<span>346</span>
<span>347</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        t[:with_force_shutdown] = true
</div><div class="line">      end
</div><div class="line active">      yield
</div><div class="line">    ensure
</div><div class="line">      t[:with_force_shutdown] = false
</div><div class="line">    end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-103">
      <div class="info">
        Extracted source (around line <strong>#99</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>97</span>
<span>98</span>
<span>99</span>
<span>100</span>
<span>101</span>
<span>102</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      begin
</div><div class="line">        if @supported_http_methods == :any || @supported_http_methods.key?(env[REQUEST_METHOD])
</div><div class="line active">          status, headers, app_body = @thread_pool.with_force_shutdown do
</div><div class="line">            @app.call(env)
</div><div class="line">          end
</div><div class="line">        else
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-104">
      <div class="info">
        Extracted source (around line <strong>#443</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>441</span>
<span>442</span>
<span>443</span>
<span>444</span>
<span>445</span>
<span>446</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">        while true
</div><div class="line">          @requests_count += 1
</div><div class="line active">          case handle_request(client, requests + 1)
</div><div class="line">          when false
</div><div class="line">            break
</div><div class="line">          when :async
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-105">
      <div class="info">
        Extracted source (around line <strong>#245</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>243</span>
<span>244</span>
<span>245</span>
<span>246</span>
<span>247</span>
<span>248</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">      @status = :run
</div><div class="line">
</div><div class="line active">      @thread_pool = ThreadPool.new(thread_name, @options) { |client| process_client client }
</div><div class="line">
</div><div class="line">      if @queue_requests
</div><div class="line">        @reactor = Reactor.new(@io_selector_backend) { |c| reactor_wakeup c }
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="source hidden" id="frame-source-0-106">
      <div class="info">
        Extracted source (around line <strong>#151</strong>):
      </div>
      <div class="data">
        <table cellpadding="0" cellspacing="0" class="lines">
          <tr>
            <td>
              <pre class="line_numbers">
<span>149</span>
<span>150</span>
<span>151</span>
<span>152</span>
<span>153</span>
<span>154</span>
              </pre>
            </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">          begin
</div><div class="line active">            @out_of_band_pending = true if block.call(work)
</div><div class="line">          rescue Exception =&gt; e
</div><div class="line">            STDERR.puts &quot;Error reached top of thread-pool: #{e.message} (#{e.class})&quot;
</div><div class="line">          end
</div>
</pre>
</td>
          </tr>
        </table>
      </div>
    </div>


  <p></p>

  
<p><code>Rails.root: /home/cyril/Code/GitHub/cyril/komayo-page</code></p>

<div id="traces-0">
    <a href="#" onclick="hide(&#39;Framework-Trace-0&#39;);hide(&#39;Full-Trace-0&#39;);show(&#39;Application-Trace-0&#39;);; return false;">Application Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace-0&#39;);hide(&#39;Full-Trace-0&#39;);show(&#39;Framework-Trace-0&#39;);; return false;">Framework Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace-0&#39;);hide(&#39;Framework-Trace-0&#39;);show(&#39;Full-Trace-0&#39;);; return false;">Full Trace</a> 

    <div id="Application-Trace-0" style="display: block;">
      <code class="traces">
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="5" href="#">
            app/views/service_worker/show.js.erb:12
          </a>
          <br>
      </code>
    </div>
    <div id="Framework-Trace-0" style="display: none;">
      <code class="traces">
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="0" href="#">
            i18n (1.14.1) lib/i18n.rb:394:in `handle_exception&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="1" href="#">
            i18n (1.14.1) lib/i18n.rb:367:in `translate_key&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="2" href="#">
            i18n (1.14.1) lib/i18n.rb:222:in `translate&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="3" href="#">
            activesupport (7.0.6) lib/active_support/html_safe_translation.rb:13:in `translate&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="4" href="#">
            actionview (7.0.6) lib/action_view/helpers/translation_helper.rb:91:in `translate&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="6" href="#">
            actionview (7.0.6) lib/action_view/base.rb:244:in `public_send&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="7" href="#">
            actionview (7.0.6) lib/action_view/base.rb:244:in `_run&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="8" href="#">
            actionview (7.0.6) lib/action_view/template.rb:157:in `block in render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="9" href="#">
            activesupport (7.0.6) lib/active_support/notifications.rb:208:in `instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="10" href="#">
            actionview (7.0.6) lib/action_view/template.rb:361:in `instrument_render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="11" href="#">
            actionview (7.0.6) lib/action_view/template.rb:155:in `render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="12" href="#">
            actionview (7.0.6) lib/action_view/renderer/template_renderer.rb:65:in `block (2 levels) in render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="13" href="#">
            activesupport (7.0.6) lib/active_support/notifications.rb:206:in `block in instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="14" href="#">
            activesupport (7.0.6) lib/active_support/notifications/instrumenter.rb:24:in `instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="15" href="#">
            activesupport (7.0.6) lib/active_support/notifications.rb:206:in `instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="16" href="#">
            actionview (7.0.6) lib/action_view/renderer/template_renderer.rb:60:in `block in render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="17" href="#">
            actionview (7.0.6) lib/action_view/renderer/template_renderer.rb:79:in `render_with_layout&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="18" href="#">
            actionview (7.0.6) lib/action_view/renderer/template_renderer.rb:59:in `render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="19" href="#">
            actionview (7.0.6) lib/action_view/renderer/template_renderer.rb:11:in `render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="20" href="#">
            actionview (7.0.6) lib/action_view/renderer/renderer.rb:61:in `render_template_to_object&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="21" href="#">
            actionview (7.0.6) lib/action_view/renderer/renderer.rb:29:in `render_to_object&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="22" href="#">
            actionview (7.0.6) lib/action_view/rendering.rb:117:in `block in _render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="23" href="#">
            actionview (7.0.6) lib/action_view/base.rb:270:in `in_rendering_context&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="24" href="#">
            actionview (7.0.6) lib/action_view/rendering.rb:116:in `_render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="25" href="#">
            actionpack (7.0.6) lib/action_controller/metal/streaming.rb:216:in `_render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="26" href="#">
            actionview (7.0.6) lib/action_view/rendering.rb:103:in `render_to_body&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="27" href="#">
            actionpack (7.0.6) lib/action_controller/metal/rendering.rb:158:in `render_to_body&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="28" href="#">
            actionpack (7.0.6) lib/action_controller/metal/renderers.rb:141:in `render_to_body&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="29" href="#">
            actionpack (7.0.6) lib/abstract_controller/rendering.rb:27:in `render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="30" href="#">
            actionpack (7.0.6) lib/action_controller/metal/rendering.rb:139:in `render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="31" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:22:in `block (2 levels) in render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="32" href="#">
            /home/cyril/.rbenv/versions/3.2.2/lib/ruby/3.2.0/benchmark.rb:311:in `realtime&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="33" href="#">
            activesupport (7.0.6) lib/active_support/core_ext/benchmark.rb:14:in `ms&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="34" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:22:in `block in render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="35" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:91:in `cleanup_view_runtime&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="36" href="#">
            activerecord (7.0.6) lib/active_record/railties/controller_runtime.rb:34:in `cleanup_view_runtime&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="37" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:21:in `render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="38" href="#">
            actionpack (7.0.6) lib/action_controller/metal/implicit_render.rb:35:in `default_render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="39" href="#">
            actionpack (7.0.6) lib/action_controller/metal/basic_implicit_render.rb:7:in `send_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="40" href="#">
            actionpack (7.0.6) lib/abstract_controller/base.rb:215:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="41" href="#">
            actionpack (7.0.6) lib/action_controller/metal/rendering.rb:165:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="42" href="#">
            actionpack (7.0.6) lib/abstract_controller/callbacks.rb:234:in `block in process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="43" href="#">
            activesupport (7.0.6) lib/active_support/callbacks.rb:107:in `run_callbacks&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="44" href="#">
            actionpack (7.0.6) lib/abstract_controller/callbacks.rb:233:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="45" href="#">
            actionpack (7.0.6) lib/action_controller/metal/rescue.rb:23:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="46" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:67:in `block in process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="47" href="#">
            activesupport (7.0.6) lib/active_support/notifications.rb:206:in `block in instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="48" href="#">
            activesupport (7.0.6) lib/active_support/notifications/instrumenter.rb:24:in `instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="49" href="#">
            activesupport (7.0.6) lib/active_support/notifications.rb:206:in `instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="50" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:66:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="51" href="#">
            actionpack (7.0.6) lib/action_controller/metal/params_wrapper.rb:259:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="52" href="#">
            activerecord (7.0.6) lib/active_record/railties/controller_runtime.rb:27:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="53" href="#">
            actionpack (7.0.6) lib/abstract_controller/base.rb:151:in `process&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="54" href="#">
            actionview (7.0.6) lib/action_view/rendering.rb:39:in `process&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="55" href="#">
            actionpack (7.0.6) lib/action_controller/metal.rb:188:in `dispatch&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="56" href="#">
            actionpack (7.0.6) lib/action_controller/metal.rb:251:in `dispatch&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="57" href="#">
            actionpack (7.0.6) lib/action_dispatch/routing/route_set.rb:49:in `dispatch&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="58" href="#">
            actionpack (7.0.6) lib/action_dispatch/routing/route_set.rb:32:in `serve&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="59" href="#">
            actionpack (7.0.6) lib/action_dispatch/journey/router.rb:50:in `block in serve&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="60" href="#">
            actionpack (7.0.6) lib/action_dispatch/journey/router.rb:32:in `each&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="61" href="#">
            actionpack (7.0.6) lib/action_dispatch/journey/router.rb:32:in `serve&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="62" href="#">
            actionpack (7.0.6) lib/action_dispatch/routing/route_set.rb:852:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="63" href="#">
            rack (2.2.7) lib/rack/tempfile_reaper.rb:15:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="64" href="#">
            rack (2.2.7) lib/rack/etag.rb:27:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="65" href="#">
            rack (2.2.7) lib/rack/conditional_get.rb:27:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="66" href="#">
            rack (2.2.7) lib/rack/head.rb:12:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="67" href="#">
            actionpack (7.0.6) lib/action_dispatch/http/permissions_policy.rb:38:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="68" href="#">
            actionpack (7.0.6) lib/action_dispatch/http/content_security_policy.rb:36:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="69" href="#">
            rack (2.2.7) lib/rack/session/abstract/id.rb:266:in `context&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="70" href="#">
            rack (2.2.7) lib/rack/session/abstract/id.rb:260:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="71" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/cookies.rb:704:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="72" href="#">
            activerecord (7.0.6) lib/active_record/migration.rb:603:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="73" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:27:in `block in call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="74" href="#">
            activesupport (7.0.6) lib/active_support/callbacks.rb:99:in `run_callbacks&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="75" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:26:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="76" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="77" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/actionable_exceptions.rb:17:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="78" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/debug_exceptions.rb:28:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="79" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/show_exceptions.rb:29:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="80" href="#">
            railties (7.0.6) lib/rails/rack/logger.rb:40:in `call_app&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="81" href="#">
            railties (7.0.6) lib/rails/rack/logger.rb:25:in `block in call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="82" href="#">
            activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `block in tagged&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="83" href="#">
            activesupport (7.0.6) lib/active_support/tagged_logging.rb:37:in `tagged&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="84" href="#">
            activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `tagged&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="85" href="#">
            railties (7.0.6) lib/rails/rack/logger.rb:25:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="86" href="#">
            sprockets-rails (3.4.2) lib/sprockets/rails/quiet_assets.rb:13:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="87" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/remote_ip.rb:93:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="88" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/request_id.rb:26:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="89" href="#">
            rack (2.2.7) lib/rack/method_override.rb:24:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="90" href="#">
            rack (2.2.7) lib/rack/runtime.rb:22:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="91" href="#">
            activesupport (7.0.6) lib/active_support/cache/strategy/local_cache_middleware.rb:29:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="92" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:61:in `block in call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="93" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:26:in `collect_events&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="94" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:60:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="95" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="96" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/static.rb:23:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="97" href="#">
            rack (2.2.7) lib/rack/sendfile.rb:110:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="98" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/host_authorization.rb:137:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="99" href="#">
            railties (7.0.6) lib/rails/engine.rb:530:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="100" href="#">
            puma (6.3.0) lib/puma/configuration.rb:270:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="101" href="#">
            puma (6.3.0) lib/puma/request.rb:100:in `block in handle_request&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="102" href="#">
            puma (6.3.0) lib/puma/thread_pool.rb:344:in `with_force_shutdown&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="103" href="#">
            puma (6.3.0) lib/puma/request.rb:99:in `handle_request&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="104" href="#">
            puma (6.3.0) lib/puma/server.rb:443:in `process_client&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="105" href="#">
            puma (6.3.0) lib/puma/server.rb:245:in `block in run&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="106" href="#">
            puma (6.3.0) lib/puma/thread_pool.rb:151:in `block in spawn_thread&#39;
          </a>
          <br>
      </code>
    </div>
    <div id="Full-Trace-0" style="display: none;">
      <code class="traces">
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="0" href="#">
            i18n (1.14.1) lib/i18n.rb:394:in `handle_exception&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="1" href="#">
            i18n (1.14.1) lib/i18n.rb:367:in `translate_key&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="2" href="#">
            i18n (1.14.1) lib/i18n.rb:222:in `translate&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="3" href="#">
            activesupport (7.0.6) lib/active_support/html_safe_translation.rb:13:in `translate&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="4" href="#">
            actionview (7.0.6) lib/action_view/helpers/translation_helper.rb:91:in `translate&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="5" href="#">
            app/views/service_worker/show.js.erb:12
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="6" href="#">
            actionview (7.0.6) lib/action_view/base.rb:244:in `public_send&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="7" href="#">
            actionview (7.0.6) lib/action_view/base.rb:244:in `_run&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="8" href="#">
            actionview (7.0.6) lib/action_view/template.rb:157:in `block in render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="9" href="#">
            activesupport (7.0.6) lib/active_support/notifications.rb:208:in `instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="10" href="#">
            actionview (7.0.6) lib/action_view/template.rb:361:in `instrument_render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="11" href="#">
            actionview (7.0.6) lib/action_view/template.rb:155:in `render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="12" href="#">
            actionview (7.0.6) lib/action_view/renderer/template_renderer.rb:65:in `block (2 levels) in render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="13" href="#">
            activesupport (7.0.6) lib/active_support/notifications.rb:206:in `block in instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="14" href="#">
            activesupport (7.0.6) lib/active_support/notifications/instrumenter.rb:24:in `instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="15" href="#">
            activesupport (7.0.6) lib/active_support/notifications.rb:206:in `instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="16" href="#">
            actionview (7.0.6) lib/action_view/renderer/template_renderer.rb:60:in `block in render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="17" href="#">
            actionview (7.0.6) lib/action_view/renderer/template_renderer.rb:79:in `render_with_layout&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="18" href="#">
            actionview (7.0.6) lib/action_view/renderer/template_renderer.rb:59:in `render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="19" href="#">
            actionview (7.0.6) lib/action_view/renderer/template_renderer.rb:11:in `render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="20" href="#">
            actionview (7.0.6) lib/action_view/renderer/renderer.rb:61:in `render_template_to_object&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="21" href="#">
            actionview (7.0.6) lib/action_view/renderer/renderer.rb:29:in `render_to_object&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="22" href="#">
            actionview (7.0.6) lib/action_view/rendering.rb:117:in `block in _render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="23" href="#">
            actionview (7.0.6) lib/action_view/base.rb:270:in `in_rendering_context&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="24" href="#">
            actionview (7.0.6) lib/action_view/rendering.rb:116:in `_render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="25" href="#">
            actionpack (7.0.6) lib/action_controller/metal/streaming.rb:216:in `_render_template&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="26" href="#">
            actionview (7.0.6) lib/action_view/rendering.rb:103:in `render_to_body&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="27" href="#">
            actionpack (7.0.6) lib/action_controller/metal/rendering.rb:158:in `render_to_body&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="28" href="#">
            actionpack (7.0.6) lib/action_controller/metal/renderers.rb:141:in `render_to_body&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="29" href="#">
            actionpack (7.0.6) lib/abstract_controller/rendering.rb:27:in `render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="30" href="#">
            actionpack (7.0.6) lib/action_controller/metal/rendering.rb:139:in `render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="31" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:22:in `block (2 levels) in render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="32" href="#">
            /home/cyril/.rbenv/versions/3.2.2/lib/ruby/3.2.0/benchmark.rb:311:in `realtime&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="33" href="#">
            activesupport (7.0.6) lib/active_support/core_ext/benchmark.rb:14:in `ms&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="34" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:22:in `block in render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="35" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:91:in `cleanup_view_runtime&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="36" href="#">
            activerecord (7.0.6) lib/active_record/railties/controller_runtime.rb:34:in `cleanup_view_runtime&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="37" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:21:in `render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="38" href="#">
            actionpack (7.0.6) lib/action_controller/metal/implicit_render.rb:35:in `default_render&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="39" href="#">
            actionpack (7.0.6) lib/action_controller/metal/basic_implicit_render.rb:7:in `send_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="40" href="#">
            actionpack (7.0.6) lib/abstract_controller/base.rb:215:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="41" href="#">
            actionpack (7.0.6) lib/action_controller/metal/rendering.rb:165:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="42" href="#">
            actionpack (7.0.6) lib/abstract_controller/callbacks.rb:234:in `block in process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="43" href="#">
            activesupport (7.0.6) lib/active_support/callbacks.rb:107:in `run_callbacks&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="44" href="#">
            actionpack (7.0.6) lib/abstract_controller/callbacks.rb:233:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="45" href="#">
            actionpack (7.0.6) lib/action_controller/metal/rescue.rb:23:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="46" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:67:in `block in process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="47" href="#">
            activesupport (7.0.6) lib/active_support/notifications.rb:206:in `block in instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="48" href="#">
            activesupport (7.0.6) lib/active_support/notifications/instrumenter.rb:24:in `instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="49" href="#">
            activesupport (7.0.6) lib/active_support/notifications.rb:206:in `instrument&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="50" href="#">
            actionpack (7.0.6) lib/action_controller/metal/instrumentation.rb:66:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="51" href="#">
            actionpack (7.0.6) lib/action_controller/metal/params_wrapper.rb:259:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="52" href="#">
            activerecord (7.0.6) lib/active_record/railties/controller_runtime.rb:27:in `process_action&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="53" href="#">
            actionpack (7.0.6) lib/abstract_controller/base.rb:151:in `process&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="54" href="#">
            actionview (7.0.6) lib/action_view/rendering.rb:39:in `process&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="55" href="#">
            actionpack (7.0.6) lib/action_controller/metal.rb:188:in `dispatch&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="56" href="#">
            actionpack (7.0.6) lib/action_controller/metal.rb:251:in `dispatch&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="57" href="#">
            actionpack (7.0.6) lib/action_dispatch/routing/route_set.rb:49:in `dispatch&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="58" href="#">
            actionpack (7.0.6) lib/action_dispatch/routing/route_set.rb:32:in `serve&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="59" href="#">
            actionpack (7.0.6) lib/action_dispatch/journey/router.rb:50:in `block in serve&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="60" href="#">
            actionpack (7.0.6) lib/action_dispatch/journey/router.rb:32:in `each&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="61" href="#">
            actionpack (7.0.6) lib/action_dispatch/journey/router.rb:32:in `serve&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="62" href="#">
            actionpack (7.0.6) lib/action_dispatch/routing/route_set.rb:852:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="63" href="#">
            rack (2.2.7) lib/rack/tempfile_reaper.rb:15:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="64" href="#">
            rack (2.2.7) lib/rack/etag.rb:27:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="65" href="#">
            rack (2.2.7) lib/rack/conditional_get.rb:27:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="66" href="#">
            rack (2.2.7) lib/rack/head.rb:12:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="67" href="#">
            actionpack (7.0.6) lib/action_dispatch/http/permissions_policy.rb:38:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="68" href="#">
            actionpack (7.0.6) lib/action_dispatch/http/content_security_policy.rb:36:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="69" href="#">
            rack (2.2.7) lib/rack/session/abstract/id.rb:266:in `context&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="70" href="#">
            rack (2.2.7) lib/rack/session/abstract/id.rb:260:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="71" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/cookies.rb:704:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="72" href="#">
            activerecord (7.0.6) lib/active_record/migration.rb:603:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="73" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:27:in `block in call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="74" href="#">
            activesupport (7.0.6) lib/active_support/callbacks.rb:99:in `run_callbacks&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="75" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/callbacks.rb:26:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="76" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="77" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/actionable_exceptions.rb:17:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="78" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/debug_exceptions.rb:28:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="79" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/show_exceptions.rb:29:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="80" href="#">
            railties (7.0.6) lib/rails/rack/logger.rb:40:in `call_app&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="81" href="#">
            railties (7.0.6) lib/rails/rack/logger.rb:25:in `block in call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="82" href="#">
            activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `block in tagged&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="83" href="#">
            activesupport (7.0.6) lib/active_support/tagged_logging.rb:37:in `tagged&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="84" href="#">
            activesupport (7.0.6) lib/active_support/tagged_logging.rb:99:in `tagged&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="85" href="#">
            railties (7.0.6) lib/rails/rack/logger.rb:25:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="86" href="#">
            sprockets-rails (3.4.2) lib/sprockets/rails/quiet_assets.rb:13:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="87" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/remote_ip.rb:93:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="88" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/request_id.rb:26:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="89" href="#">
            rack (2.2.7) lib/rack/method_override.rb:24:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="90" href="#">
            rack (2.2.7) lib/rack/runtime.rb:22:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="91" href="#">
            activesupport (7.0.6) lib/active_support/cache/strategy/local_cache_middleware.rb:29:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="92" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:61:in `block in call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="93" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:26:in `collect_events&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="94" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/server_timing.rb:60:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="95" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/executor.rb:14:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="96" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/static.rb:23:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="97" href="#">
            rack (2.2.7) lib/rack/sendfile.rb:110:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="98" href="#">
            actionpack (7.0.6) lib/action_dispatch/middleware/host_authorization.rb:137:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="99" href="#">
            railties (7.0.6) lib/rails/engine.rb:530:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="100" href="#">
            puma (6.3.0) lib/puma/configuration.rb:270:in `call&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="101" href="#">
            puma (6.3.0) lib/puma/request.rb:100:in `block in handle_request&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="102" href="#">
            puma (6.3.0) lib/puma/thread_pool.rb:344:in `with_force_shutdown&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="103" href="#">
            puma (6.3.0) lib/puma/request.rb:99:in `handle_request&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="104" href="#">
            puma (6.3.0) lib/puma/server.rb:443:in `process_client&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="105" href="#">
            puma (6.3.0) lib/puma/server.rb:245:in `block in run&#39;
          </a>
          <br>
          <a class="trace-frames trace-frames-0" data-exception-object-id="12460" data-frame-id="106" href="#">
            puma (6.3.0) lib/puma/thread_pool.rb:151:in `block in spawn_thread&#39;
          </a>
          <br>
      </code>
    </div>

  <script>
    (function() {
      var traceFrames = document.getElementsByClassName('trace-frames-0');
      var selectedFrame, currentSource = document.getElementById('frame-source-0-0');

      // Add click listeners for all stack frames
      for (var i = 0; i < traceFrames.length; i++) {
        traceFrames[i].addEventListener('click', function(e) {
          e.preventDefault();
          var target = e.target;
          var frame_id = target.dataset.frameId;

          if (selectedFrame) {
            selectedFrame.className = selectedFrame.className.replace("selected", "");
          }

          target.className += " selected";
          selectedFrame = target;

          // Change the extracted source code
          changeSourceExtract(frame_id);
        });

        function changeSourceExtract(frame_id) {
          var el = document.getElementById('frame-source-0-' + frame_id);
          if (currentSource && el) {
            currentSource.className += " hidden";
            el.className = el.className.replace(" hidden", "");
            currentSource = el;
          }
        }
      }
    })();
  </script>
</div>

  <h2 class="request-heading">Request</h2>
  <p><b>Parameters</b>:</p> <pre>{&quot;format&quot;=&gt;&quot;js&quot;}
</pre>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleSessionDump()">Toggle session dump</a></div>
  <div id="session_dump" class="hidden"><pre></pre></div>
</div>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleEnvDump()">Toggle env dump</a></div>
  <div id="env_dump" class="hidden"><pre>GATEWAY_INTERFACE: &quot;CGI/1.2&quot;
HTTP_ACCEPT: &quot;*/*&quot;
HTTP_ACCEPT_ENCODING: &quot;gzip;q=1.0,deflate;q=0.6,identity;q=0.3&quot;
HTTP_ACCEPT_LANGUAGE: &quot;pa&quot;
HTTP_VERSION: &quot;HTTP/1.1&quot;
ORIGINAL_SCRIPT_NAME: &quot;&quot;
REMOTE_ADDR: &quot;127.0.0.1&quot;
SERVER_NAME: &quot;localhost&quot;
SERVER_PROTOCOL: &quot;HTTP/1.1&quot;</pre></div>
</div>

<h2 class="response-heading">Response</h2>
<p><b>Headers</b>:</p> <pre>None</pre>

</main>


</body>
</html>